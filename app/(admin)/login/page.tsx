import React from 'react'
// import LoginForm from './Form'
import dynamic from 'next/dynamic';

function page() {
  const LoginForm = dynamic(() => import('./Form'), { ssr: false });
  return (
    <div className='w-screen h-screen flex items-center justify-center relative overflow-hidden'>
      <LoginForm/>
      <img src="/images/logo.png" alt="" className="w-[500px] hidden md:block absolute -bottom-44 -right-20 opacity-10 " />
    </div>
  )
}

export default page
