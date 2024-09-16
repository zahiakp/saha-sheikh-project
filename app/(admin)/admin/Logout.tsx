
"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { showMessage } from "@/components/common/CusToast";
import CusConfirm from "@/components/common/CusConfirm";

function Logout() {
  

  // Function to open the modal and set the type
  
  const [isOpen,setIsOpen] = useState(false)
  // Handle logout logic
 const handleLogout = async () => {
  const confirm = window.confirm('are ready to logout ?')
   if(confirm){
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
    <button onClick={() => handleLogout()} className="absolute bottom-0 w-full button p-5  bg-secondary/55 hover:bg-primary hover:text-white duration-200" aria-label="Logout">
      Log Out
      <div className="arrow-wrapper">
        <div className="arrow bg-secondary/55"></div>
      </div>
    </button>
    {/* {isModalOpen && (
        <CusConfirm
          type={confirmType}
          close={setIsModalOpen}
          onConfirm={handleLogout} // Pass the confirmation handler
        />
      )} */}
     </>
  );
}

export default Logout;
