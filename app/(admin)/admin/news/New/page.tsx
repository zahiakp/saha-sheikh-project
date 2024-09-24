import AdminLayout from '@/components/Layout/AdminLayout'
import React from 'react'
import dynamic from 'next/dynamic';

function page() {
  const UploadForm = dynamic(() => import('./Form'), { ssr: false });

  return (
   <AdminLayout>
    <UploadForm/>
   </AdminLayout>
  )
}

export default page
