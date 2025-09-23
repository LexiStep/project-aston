import PostCard from "../../entities/post/ui/PostCard";
import { useGetPostsQuery } from "../../features/posts/apiPosts";

function PostList() {
  const { data: posts, error, isLoading } = useGetPostsQuery();

  if (isLoading) return <div>Загрузка постов 🔃...</div>;
  if (error || !posts) return <div>Ошибка загрузки постов 💥</div>;

  return (
    <ul>
      {posts?.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </ul>
  );
}

export default PostList;
