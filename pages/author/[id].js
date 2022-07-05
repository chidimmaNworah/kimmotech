import React from 'react';
import { useRouter } from 'next/router';
import { getAuthorProfile, getAuthorPosts } from '../../services';
import { PostCard, Categories, Loader } from '../../components';

const AuthorPost = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthorPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getAuthorPosts(params.id);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const authors = await getAuthorProfile();
  return {
    paths: authors.map(({ id }) => ({ params: { id } })),
    fallback: true,
  };
}