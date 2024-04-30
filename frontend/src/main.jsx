import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "katex/dist/katex.min.css"; // `rehype-katex` does not import the CSS for you

import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";
import store from "./store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthProtect from "./Hooks/AuthenticationHook";
// Pages :
import Root from "./pages/Root/RootPage";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Problemset from "./pages/problemset/Problemset";
import Problem from "./pages/ProblemView/Problem";
import PostCreate from "./pages/testPage";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 300000,
      gcTime: 350000,
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProtect>
        <Root />
      </AuthProtect>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/problemset",
    element: (
      <AuthProtect>
        <Problemset />
      </AuthProtect>
    ),
  },
  {
    path: "/problemset/:qId",
    element: (
      <AuthProtect>
        <Problem />
      </AuthProtect>
    ),
  },{
    path: "/test",
    element: (
      <AuthProtect>
        <PostCreate />
      </AuthProtect>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
