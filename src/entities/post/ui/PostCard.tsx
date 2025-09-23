import type { Post } from "../../../features/posts/apiPosts";

type PostCardProps = {
  post: Post;
};

function PostCard({ post }: PostCardProps) {
  return (
    <li>
      <h3>
        <span>{post.id}</span> {post.title}
      </h3>
      <p>{post.body}</p>
    </li>
  );
}

export default PostCard;
