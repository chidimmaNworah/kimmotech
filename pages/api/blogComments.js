// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { GraphQLClient, gql } from "graphql-request"

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
const graphcmsToken = process.env.GRAPHCMS_TOKEN2

export default async function blogComments(req, res){
  const {name, email, slug, comment} = req.body

  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphcmsToken}`
    }
  })

  const query = gql`
    mutation CreateBlogComment($name: String!, $email: String!, $comment: String!, $slug: String){
      createBlogComment(data: {name: $name, email: $email, comment: $comment, blogPost: { connect: {slug: $slug}}}){id}
    }
  `
  
  try{
    const result = await graphQLClient.request(query, req.body)
    return res.status(200).send(result)
  } catch (error) {
    console.log(error)
    return res.status(500).send(error)
  }

}
