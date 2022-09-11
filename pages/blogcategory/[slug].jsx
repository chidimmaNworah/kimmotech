import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'
import { getBlogCategories, getBlogCategoryPost } from '../../services';
import { BlogPostCard, Categories, Loader, Pagination, BlogHeader } from '../../components';

const BlogCategoryPost = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(20)

  //get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexofFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexofFirstPost, indexOfLastPost)

  //chang page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
      <Head>
        <title>Kimmotech Technologies, Software solutions, Tech Blogs, graphics, web design, seo and more </title>
        <link rel="icon" href="/headicon.png" />
      </Head>
      <BlogHeader/>
      <div className='absolute top-0 bg-black pt-20 w-full portfoliobg'>
        <h1 className="text-5xl text-white text-center font-normal mb-10">Categories</h1>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-4 container mx-auto">
          {currentPosts.map((post, index) => (
              <BlogPostCard key={index} post={post.node} />
            ))}
          <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
          </div>
        </div>
    </div>
  );
};
export default BlogCategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getBlogCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getBlogCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}