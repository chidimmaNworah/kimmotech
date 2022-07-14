import {request, gql} from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async () => {
    const query = gql `
        query MyQuery {
            postsConnection {
                edges {
                    node {
                    author {
                        bio
                        name
                        id
                        photo {
                        url
                        }
                        createdBy {
                            id
                          }
                    }
                    createdAt
                    slug
                    title
                    excerpt
                    featuredImage {
                        url
                    }
                    categories {
                        name
                        slug
                    }
                    }
                }
            }
        }
    `
    const results = await request(graphqlAPI, query)
    return results.postsConnection.edges
}

export const getPostDetails = async (slug) => {
    const query = gql `
        query GetPostDetails($slug: String!) {
            post(where: {slug: $slug}){
                author {
                    bio
                    name
                    id
                    photo {
                    url
                    }
                }
                createdAt
                slug
                title
                excerpt
                featuredImage {
                    url
                }
                categories {
                    name
                    slug
                }
                content {
                    raw
                }
            }
        }
    `
    const results = await request(graphqlAPI, query, {slug})
    return results.post
}

export const getRecentPosts = async () => {
    const query = gql`
    query GetPostDetails() {
        posts(
            orderBy: createdAt_ASC
            last: 3
            ){
                title
                featuredImage{
                    url
                }
                createdAt
                slug
            }
    }
    `

    const results = await request(graphqlAPI, query)
    return results.posts
}

export const getSimilarPosts = async (categories, slug) => {
    const query = gql `
        query GetPostDetails($slug: String!, $categories: [String!]){
            posts(
                where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
                last: 3 
            ){
                title
                featuredImage{
                    url
                }
                createdAt
                slug
            }
        }
    `
    const results = await request(graphqlAPI, query, {categories, slug})
    return results.posts
}

export const getCategories = async () => {
    const query = gql`
        query GetCategories {
            categories {
                name
                slug
            }
        }
    `
    const result = await request(graphqlAPI, query);
    return result.categories
}

export const getBrands = async () => {
    const query = gql`
        query GetBrands {
            brands {
                brandPhoto {
                    url
                  }
            }
        }
    `
    const result = await request(graphqlAPI, query)
    return result.brands
}

export const getCategoryPost = async (slug) => {
    const query = gql`
      query GetCategoryPost($slug: String!) {
        postsConnection(where: {categories_some: {slug: $slug}}) {
          edges {
            cursor
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
    `;
  
    const result = await request(graphqlAPI, query, { slug });
  
    return result.postsConnection.edges;
};

export const submitComment = async (obj) =>{
    const result = await fetch('/api/comments', {
        method: 'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(obj),
    })

    return result.json()
}

export const getComments = async (slug) => {
    const query = gql`
        query GetComments ($slug: String!) {
        comments(where: {post: {slug: $slug}}) {
            name
            createdAt
            comment
        }
        }
    `
    const result = await request(graphqlAPI, query, {slug});
    return result.comments
}

export const getFeaturedPosts = async () => {
    const query = gql `
        query getCategoryPost(){
            posts(where: {featuredPost: true}){
                author {
                    name
                    photo {
                        url
                    }
                }
                featuredImage {
                    url
                }
                title
                slug
                createdAt
            }
        }
    `
    const result = await request(graphqlAPI, query)
    return result.posts
}

export const getAuthorProfile = async () => {
    const query = gql`
    query MyQuery {
        authors {
          id
          name
          bio
          slug
          photo {
            url
          }
        }
      }
    `
    const result = await request(graphqlAPI, query);
    return result.authors
}

export const getAuthorPosts = async (id) => {
    const query = gql`
      query GetAuthorPost($id: ID) {
        postsConnection(where: {author: {id: $id}}) {
          edges {
            cursor
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
                slug
              }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
    `;
  
    const result = await request(graphqlAPI, query, { id });
  
    return result.postsConnection.edges;
};

export const postsSearchQuery = async (id) => {
    const query = gql `
        query searchQuery($filter: String!) {
            postsConnection (filter: $filter) {
                edges {
                    node {
                    author {
                        bio
                        name
                        id
                        photo {
                        url
                        }
                        createdBy {
                            id
                          }
                    }
                    createdAt
                    slug
                    title
                    excerpt
                    featuredImage {
                        url
                    }
                    categories {
                        name
                        slug
                    }
                    }
                }
            }
        }
    `
   
  
    const result = await request(graphqlAPI, query, { id });
  
    return result.postsConnection.edges;
};

export const submitReviews = async (obj) =>{
    const result = await fetch('/api/reviews', {
        method: 'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(obj),
    })

    return result.json()
}

export const getReviews = async () => {
    const query = gql`
        query GetReviews {
            reviews {
                name
                email
                testimonial
                createdAt
            }
        }
    `
    const result = await request(graphqlAPI, query);
    return result.reviews
}