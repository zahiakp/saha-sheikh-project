"use client";

import { useRouter } from "next/navigation";
import { MdDelete, MdDeleteOutline } from "react-icons/md";
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { showMessage } from "@/components/common/CusToast"
import { deleteNews } from "./func";


const DeleteItem = ({ id }: { id: any }) => {
  // const ids = decodeId(id)
  const router = useRouter();
  return (
    <button data-tip="Delete"
      onClick={async () => {
        if (confirm("Are you sure you want to delete")) {
          await deleteNews(id).then((res: any) => {
            if (res) {
                // toast.success("Article Deleted successfully", {
                //     autoClose : 2000
                //   });
                  showMessage(`News Deleted successfully`,'success')
                //   router.push('/products')
                      router.refresh()
            } else {
              // toast.error("Something went wrong");
              showMessage("Something went wrong",'error')
            }
          });
        }
      }}
      className="h-10 w-10 rounded-lg bg-red-50 flex items-center justify-center cursor-pointer tooltip"
    >
      <MdDeleteOutline className="text-xl text-red-500 " />
    </button>
  );
};

export default DeleteItem;
