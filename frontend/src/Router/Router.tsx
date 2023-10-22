import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";

const About = React.lazy(() => import("../pages/About/About"));
const Resume = React.lazy(() => import("../pages/Resume/Resume"));
const Blogs = React.lazy(() => import("../pages/Blogs/Blogs"));
const BlogById = React.lazy(() => import("../pages/BlogById/BlogById"));
const CreateBlog = React.lazy(() => import("../pages/CreateBlog/CreateBlog"));
const EditBlog = React.lazy(() => import("../pages/EditBlog/EditBlog"));
const DeleteBlog = React.lazy(() => import("../pages/DeleteBlog/DeleteBlog"));
const Error = React.lazy(() => import("../pages/Error/Error"));

const Router = () => {
  /**
   * Renders the router component.
   *
   * @return {JSX.Element} The JSX element representing the router component.
   */
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        {[`/`, `/about`].map((path, idx) => (
          <Route path={path} element={<About />} key={idx} />
        ))}
        <Route path={"/resume"} index element={<Resume />} />
        <Route path={"/blogs"} index element={<Blogs />} />
        <Route path={"/blogs"} index element={<Blogs />} />
        <Route path={"/blog/:id"} element={<BlogById />} />
        <Route path={"/create"} element={<CreateBlog />} />
        <Route path={"/edit/:id"} element={<EditBlog />} />
        <Route path={"/delete/:id"} element={<DeleteBlog />} />
        <Route path={`*`} element={<Error />} />
      </Route>
      <Route path={`*`} element={<Error />} />
    </Routes>
  );
};

export default Router;
