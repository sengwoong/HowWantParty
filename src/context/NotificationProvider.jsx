// NotificationProvider.jsx
import React, { createContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalPortal from "../components/ui/ModalPortal";
import _ from 'lodash';

const Notification = createContext();

const NotificationProvider = ({ children }) => {
  const [notificationCount, setNotificationCount] = useState(0);
  const [message, setMessage] = useState();
  const [type, setType] = useState();

  const options = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  };

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
  }

  const toggleNotification = () => {
    console.log("toggleNotification");
    console.log(message);
    console.log(type);

    if (message || type) {
      if (notificationCount === 0) {
        setNotificationCount(1);
        notify();

        // Reset the notification count after 3 seconds
        setTimeout(() => {
          setNotificationCount(0);
          setMessage("");
          setType("");
        }, 3000);
      }
    }
  };

  return (
    <Notification.Provider value={{ toggleNotification, setMessage, setType }}>
      {children}
      {notificationCount > 0 && (
        <ModalPortal>
          <ToastContainer />
        </ModalPortal>
      )}
    </Notification.Provider>
  );
};

export { NotificationProvider, Notification };
