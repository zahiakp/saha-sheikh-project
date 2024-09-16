import React from "react";
import AdminLayout from "@/components/Layout/AdminLayout";
import CusConfirm from "@/components/common/CusConfirm";

function page() {
  return (
    <AdminLayout>
      <div className="flex w-full h-full items-center justify-center">
        <p className="text-7xl font-bold">Dashboard</p>
      </div>
      {/* <CusConfirm type={'logout'}/> */}
    </AdminLayout>
  );
}

export default page;
