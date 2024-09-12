import React from 'react'
import Dashboard from '../common/Dashboard'

function AdminLayout(props:any) {
  return (
    <main className='flex bg-gray-50'>
      <Dashboard/>
      
        <div className='flex flex-col flex-grow w-full pb-14 relative min-h-screen overflow-x-hidden'>
        <div className="flex items-center justify-between p-5 px-10 bg-secondary/20">
      <p className="font-semibold text-2xl text-primary">Saha Sheikh Abubakr Egypt</p>
    </div>
          <div className='p-10 px-14 '>{props.children}</div>
          {/* <Footer/> */}
        </div>
    </main>
  )
}

export default AdminLayout
