import { useMutation } from "@tanstack/react-query";

interface Blog {
  title: string;
  image: string;
  imageDescription: string;
  summary: string;
  content: string;
  categories: string[];
}

const useCreateBlogMutation = () => {
  const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/create-blogs`;

  return useMutation({
    mutationFn: (blog: Blog) => {
      return fetch(apiUrl, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      });
    },
  });
};
export default useCreateBlogMutation;
