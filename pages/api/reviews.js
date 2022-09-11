// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { GraphQLClient, gql } from "graphql-request"

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
const graphcmsToken = process.env.GRAPHCMS_TOKEN

export default async function reviews(req, res){
  const {name, email, testimonial, profession, instagram, twitter, facebook} = req.body

  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphcmsToken}`
    }
  })

  const query = gql`
    mutation CreateReview($name: String!, $email: String!, $testimonial: String!, $profession: String!, $instagram: String!, $twitter: String!, $facebook: String!){
      createReview(data: {name: $name, email: $email, testimonial: $testimonial, profession: $profession, instagram: $instagram, twitter: $twitter, facebook: $facebook}){id}
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
