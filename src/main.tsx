import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AppRouter } from "./app/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppRouter />
      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer autoClose={2000} />
    </QueryClientProvider>
  </StrictMode>,
);
