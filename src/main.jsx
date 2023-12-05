import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthContextProvider } from "./context/AuthContext";
import {  NotificationProvider } from "./context/NotificationProvider";
import "./index.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ModelContextProvider } from "./context/ModelContextProvider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
  <QueryClientProvider client={queryClient}>

      <AuthContextProvider>
      <ModelContextProvider>
        <NotificationProvider>
      <ReactQueryDevtools initialIsOpen={true} position='bottom' />
        <App />
        </NotificationProvider>
      </ModelContextProvider>
      </AuthContextProvider>

  </QueryClientProvider>
  </React.StrictMode>

);
