import AdminLayout from "@/components/Layout/AdminLayout";
import React from "react";
// import Content from "./Content";
// import { NEWS } from "@/components/data/data";
import { getNews } from "./New/func";
import dynamic from "next/dynamic";

async function page() {
  const Content = dynamic(() => import('./Content'), { ssr: false });
  const News = await getNews()
  return (
    <AdminLayout>
      <Content article={News?.data}/>
    </AdminLayout>
  );
}

export default page;
