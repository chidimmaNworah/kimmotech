import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'
import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Categories, Loader, Pagination } from '../../components';

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
        <title>FTS Blog</title>
        <link rel="icon" href="/head_icon.svg" />
        <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></script>
        <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>
      </Head>

      {categories.map((category) => (
      <h1 className="text-5xl text-[#4D4D4D] text-center font-bold font-serif mb-10">Our </h1>
      ))}
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