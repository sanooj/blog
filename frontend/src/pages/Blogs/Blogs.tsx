import useGetBlogsDataQuery from "../../api/dataFetchingHooks/queries/useGetBlogsDataQuery";

const Blogs = () => {
  const { data, isLoading } = useGetBlogsDataQuery();

  return (
    <div>
      {isLoading ? <div>Loading...</div> : null}
      {data &&
        data?.data?.map(({ _id, title, content }) => (
          <div key={_id}>
            <h1>{title}</h1>
            <p>{content}</p>
          </div>
        ))}
    </div>
  );
};

export default Blogs;
