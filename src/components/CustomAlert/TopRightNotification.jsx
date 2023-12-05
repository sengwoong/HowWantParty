import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalPortal from "../ui/ModalPortal";

const TopRightNotification = ({ message, type = "info" }) => {
  const options = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  };

  useEffect(() => {
    const notify = () => {
      switch (type) {
        case "success":
          toast.success(message, options);
          break;
        case "warning":
          toast.warning(message, options);
          break;
        case "error":
          toast.error(message, options);
          break;
        default:
          toast.info(message, options);
          break;
      }
    };

    
      notify();


  });

  return (
<ModalPortal>
    <ToastContainer />
</ModalPortal>




  );
};

export default TopRightNotification;
