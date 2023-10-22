import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
const Home = React.lazy(() => import("../pages/Home"));
const Blogs = React.lazy(() => import("../pages/Blogs"));
const BlogById = React.lazy(() => import("../pages/BlogById"));
const CreateBlog = React.lazy(() => import("../pages/CreateBlog"));
const EditBlog = React.lazy(() => import("../pages/EditBlog"));
const DeleteBlog = React.lazy(() => import("../pages/DeleteBlog"));

const Router = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route path={"/blogs"} index element={<Blogs />} />
        <Route path={"/blog/:id"} element={<BlogById />} />
        <Route path={"/create"} element={<CreateBlog />} />
        <Route path={"/edit/:id"} element={<EditBlog />} />
        <Route path={"/delete/:id"} element={<DeleteBlog />} />
        <Route path={`*`} element={<Home />} />
      </Route>
      <Route path={`*`} element={<Home />} />
    </Routes>
  );
};

export default Router;
