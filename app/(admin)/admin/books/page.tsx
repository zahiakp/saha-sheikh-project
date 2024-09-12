import AdminLayout from "@/components/Layout/AdminLayout";
import React from "react";

function page() {
  return (
    <AdminLayout>
      <div className="flex w-full h-full items-center justify-center">
        <p className="text-7xl font-bold">Books</p>
      </div>
    </AdminLayout>
  );
}

export default page;
