import React, { SyntheticEvent } from "react";
import useCreateBlogMutation from "../api/dataFetchingHooks/mutation/useCreateBlogMutation";

const CreateBlog = () => {
  const createBlog = useCreateBlogMutation();

  const onFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      title: { value: string };
      image: { value: string };
      imageDescription: { value: string };
      summary: { value: string };
      content: { value: string };
      react: { checked: boolean; value: string };
      js: { checked: boolean; value: string };
      css: { checked: boolean; value: string };
      html: { checked: boolean; value: string };
    };

    const categories: string[] = [];
    if (target.react.checked) categories.push(target.react.value);
    if (target.js.checked) categories.push(target.js.value);
    if (target.css.checked) categories.push(target.css.value);
    if (target.html.checked) categories.push(target.html.value);

    createBlog.mutate({
      title: target.title.value,
      image: target.image.value,
      imageDescription: target.imageDescription.value,
      summary: target.summary.value,
      content: target.content.value,
      categories,
    });
  };
  return (
    <div>
      <h1>Create Blog</h1>
      <form onSubmit={onFormSubmit}>
        <div>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' />
        </div>
        <div>
          <label htmlFor='image'>Image</label>
          <input type='text' id='image' />
        </div>
        <div>
          <label htmlFor='imageDescription'>Image Description</label>
          <input type='text' id='imageDescription' />
        </div>
        <div>
          <label htmlFor='summary'>Summary</label>
          <input type='text' id='summary' />
        </div>
        <div>
          <label htmlFor='content'>Content</label>
          <textarea id='content' />
        </div>
        <div>
          <label>Categories</label>
          <div>
            <div>
              <label htmlFor='react'>React</label>
              <input type='checkbox' id='react' value={"React"} />
            </div>
            <div>
              <label htmlFor='js'>Javascript</label>
              <input type='checkbox' id='js' value={"Javascript"} />
            </div>
            <div>
              <label htmlFor='css'>CSS</label>
              <input type='checkbox' id='css' value={"CSS"} />
            </div>
            <div>
              <label htmlFor='html'>HTML</label>
              <input type='checkbox' id='html' value={"HTML"} />
            </div>
          </div>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default CreateBlog;
