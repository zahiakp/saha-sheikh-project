
"use client";
import React from "react";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { showMessage } from "@/components/common/CusToast";

function Logout() {
  // Handle logout logic
  const handleLogout = async () => {
    const userConfirmed = window.confirm("Are you sure you want to logout?");

    if (userConfirmed) {
      // Remove the token cookie
      Cookies.remove("token");
      // Redirect to login page
      window.location.replace("/login");
    }
  };
  
  return (<>
{/* <button onClick={()=>showMessage( 'What is this','success')} className="button p-5 rounded-2xl bg-primary hover:bg-black duration-200" aria-label="Logout">
      Log Out
      <div className="arrow-wrapper">
        <div className="arrow"></div>
      </div>
    </button> */}
    <button onClick={handleLogout} className="absolute bottom-0 w-full button p-5  bg-secondary/55 hover:bg-primary hover:text-white duration-200" aria-label="Logout">
      Log Out
      <div className="arrow-wrapper">
        <div className="arrow bg-secondary/55"></div>
      </div>
    </button></>
  );
}

export default Logout;
