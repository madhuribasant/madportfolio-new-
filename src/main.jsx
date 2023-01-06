import { QueryClient, QueryClientProvider } from "react-query";
import {ReactQueryDevtools} from 'react-query/devtools'
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.scss";
import { AppProvider } from "./components/Context";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  

  <QueryClientProvider client={client}>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  
  </QueryClientProvider>
  
);
