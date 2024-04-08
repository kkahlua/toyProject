import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ArticleCreate,
  ArticleList,
  ArticleUpdate,
  ArticleView,
} from "./routes/articles";
import { AuthLogin, AuthRegister } from "./routes/auth";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/articles",
    children: [
      { index: true, Component: ArticleList },
      { path: "new", Component: ArticleCreate },
      {
        path: ":articleId",
        children: [
          { index: true, Component: ArticleView },
          { path: "edit", Component: ArticleUpdate },
        ],
      },
    ],
  },
  {
    path: "/auth",
    children: [
      { path: "login", Component: AuthLogin },
      { path: "register", Component: AuthRegister },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
