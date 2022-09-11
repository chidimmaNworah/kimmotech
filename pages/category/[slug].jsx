import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'
import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Categories, Loader, Pagination, Header, Footer } from '../../components';

const CategoryPost = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

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

      <Header />
      <div className='absolute top-0 bg-black pt-20 w-full portfoliobg'>
      <h1 className="text-5xl text-white text-center font-normal mb-10">Project Categories</h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 container mx-auto px-10 mb-8">
        <div  className='lg:col-span-12 col-span-1'>
          <div  className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
          {posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
          <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
        </div>
      </div>
      <Footer />
      </div>
    </div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}