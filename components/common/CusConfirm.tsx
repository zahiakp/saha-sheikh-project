"use client";
import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import IconTrashLines from "../Icons/icon-trash-lines";
import IconLogout from "../Icons/icon-logout";
import IconInfoHexagon from "../Icons/icon-info-hexagon";

export function CusConfirm({
  type,
  // close,
  onConfirm, // Added to handle confirmation
}: {
  type?: string;
  // close: (state: boolean) => void;
  onConfirm: () => void; // Function to handle the confirm action
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmType, setConfirmType] = useState<
    "delete" | "logout" | "other"
  >();

  // Function to open the modal and set the type
  const handleOpenConfirm = (type: "delete" | "logout" | "other") => {
    setConfirmType(type);
    setIsModalOpen(true);
  };

  // Function to handle the confirmation logic
  const handleConfirm = () => {
    setIsModalOpen(false);

    if (confirmType === "delete") {
      console.log("Note Deleted!");
      // Perform delete action
    } else if (confirmType === "logout") {
      console.log("User Logged Out!");
      // Perform logout action
    } else {
      console.log("Action Confirmed!");
    }
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="relative w-full max-w-lg bg-white rounded-2xl overflow-hidden z-50">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 "
            >
              <MdOutlineClose className="text-xl" />
            </button>

            <div className="bg-gray-100 py-3 text-lg font-medium px-5">
              {type === "delete"
                ? "Confirm Delete"
                : type === "logout"
                ? "Confirm Logout"
                : "Confirm Action"}
            </div>
            <div className="p-5 text-center">
              <div className="mx-auto w-24 h-24 flex items-center justify-center rounded-full border-[7px] border-red-100 bg-red-500 p-4 text-white">
                {type === "delete" ? (
                  <IconTrashLines className="h-10 w-10" />
                ) : type === "logout" ? (
                  <IconLogout className="h-10 w-10 rotate-90" />
                ) : (
                  <IconInfoHexagon className="h-10 w-10" />
                )}
              </div>
              <div className="mx-auto mt-5 sm:w-3/4">
                Are you sure you want to{" "}
                {type === "delete"
                  ? "Delete"
                  : type === "logout"
                  ? "Logout"
                  : "Confirm"}{" "}
                this?
              </div>

              <div className="mt-8 flex items-center justify-center">
                <button
                  type="button"
                  className="btn btn-outline-danger px-8"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn bg-red-600 text-white hover:bg-red-500 ml-4 px-8"
                  onClick={onConfirm}
                >
                  {type === "delete"
                    ? "Delete"
                    : type === "logout"
                    ? "Logout"
                    : "Confirm"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CusConfirm;
