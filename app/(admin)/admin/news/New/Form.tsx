"use client";
import { useState } from "react";
import * as Yup from "yup";
import {
  BodyInput,
  FormSelect,
  FormUpload,
  TitleInput,
} from "@/components/common/FormAssets";
import { useRouter } from "next/navigation";
import { PiUploadBold } from "react-icons/pi";
import { RiSave3Line } from "react-icons/ri";
import { toast } from "react-toastify";
import { Select } from "antd";
import { uploadImage, uploadNews } from "./func";
import { useFormik } from "formik";
import { ArraytoString } from "@/components/common/decodeTags";
import { antFilterOption } from "@/components/common/antFillteroption";
import { createUrlLink } from "@/components/common/urlCreator";
import StyledButton from "@/components/common/StyledButton";
import { showMessage } from "@/components/common/CusToast";
import Link from "next/link";

const UploadForm = () => {
  const POST_STATUS = [
    { value: "active", label: "active" },
    { value: "inactive", label: "inactive" },
  ];
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      file: null,
      image: "",
      title: "",
      body: "",
      type: "",
      url: "",
      tags: [],
      status: "active",
    },
    validationSchema: Yup.object({
      // file: Yup.mixed().required("Image is required"),
      title: Yup.string().required("Title is required"),
      body: Yup.string().required("Content is required"),
      type: Yup.string().required("Category is required"),
      tags: Yup.array().min(1, "At least one tag is required"),
    }),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        if (values.file) {
          const imageUploadResult = await uploadImage(values.file);
          if (imageUploadResult?.success) {
            const image = imageUploadResult.filename;
            const newsUploadResult = await uploadNews(
              values.title,
              values.body,
              image,
              values.type,
              createUrlLink(values.title),
              ArraytoString(values.tags),
              values.status
            );
            if (newsUploadResult) {
              showMessage("News uploaded successfully", "success");
              router.replace("/admin/news/");
              router.refresh();
            } else {
              showMessage("Something went wrong!", "error");
            }
          }
        } else {
          const newsUploadResult = await uploadNews(
            values.title,
            values.body,
            values.image,
            values.type,
            createUrlLink(values.title),
            ArraytoString(values.tags),
            values.status
          );
          if (newsUploadResult) {
            showMessage("News uploaded successfully", "success");
            router.replace("/admin/news/");
            router.refresh();
          } else {
            showMessage("Something went wrong!", "error");
          }
        }
      } catch (error) {
        console.error("Error:", error);
        showMessage("Something went wrong!", "error");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <>
      <div className="w-[95%] max-w-[1200px] flex items-center">
        <form onSubmit={formik.handleSubmit} className="w-full flex flex-col">
          <main className="w-full flex justify-between mb-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-secondary text-sm breadcrumbs">
                  <ul>
                    <li>
                      <Link href="/admin">Dashbord</Link>
                    </li>
                    <li>
                      <Link href="/admin/news">News & Events</Link>
                    </li>
                    <li>Add New</li>
                  </ul>
                </div>
                <h1 className="text-3xl font-bold ">Add New News</h1>
              </div>
            </div>
            <div>
              <button
                className={`bg-primary group hover:bg-primary/90 w-[270px] ${
                  loading && "bg-zinc-700"
                } duration-300 rounded-xl text-base font-semibold text-white flex items-center justify-center gap-3 py-[15px] px-10`}
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <p>Publishing...</p>
                  </>
                ) : (
                  <>
                    <PiUploadBold className="text-lg ml-2" />
                    <StyledButton text={"Publish"} />
                  </>
                )}
              </button>
            </div>
          </main>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-2">
              <TitleInput
                formik={formik}
                label="Title"
                name="title"
                placeholder="Title"
              />
              <BodyInput formik={formik} label="" name="body" />
              
            </div>
            <div className="col-span-1">
              <div className="grid gap-2 w-full text-lg"></div>
              <div
                className={` border rounded-md p-4 grid gap-3 ${
                  formik.errors["file"] && formik.touched["file"]
                    ? "bg-red-100 border-red-500"
                    : "bg-white"
                }`}
              >
                <div className="flex justify-between items-center">
                  <p>Select image</p>
                </div>
                <FormUpload
                  add_url=""
                  formik={formik}
                  label="Upload Image"
                  placeholder="Select Item"
                  name="file"
                  fileTypes="image/*"
                />
              </div>
              <div className="bg-white rounded-md mt-4 p-4 grid gap-1">
                <div className="flex justify-between items-center">
                  <p>Select Tags</p>
                </div>
                <Select
                  variant="borderless"
                  mode="tags"
                  className="w-full border rounded-md focus:border-zinc-900 mt-2 py-1 cursor-pointer"
                  showSearch
                  placeholder="Select tags"
                  size="large"
                  filterOption={antFilterOption}
                  value={formik.values["tags"]}
                  onChange={(value) => formik.setFieldValue("tags", value)}
                  options={Categories}
                />
              </div>
              <div className="mt-2">
                <div
                  className={` border  rounded-md p-4 grid gap-3 ${
                    formik.errors["type"] && formik.touched["type"]
                      ? "bg-red-100 border-red-500"
                      : "bg-white"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <p>Select Category</p>
                  </div>
                  <FormSelect
                    formik={formik}
                    name="type"
                    placeholder="Select Category"
                    label=""
                    items={Categories}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UploadForm;

export const Categories = [
  { label: "News", value: "News" },
  { label: "Events", value: "Events" },
];
