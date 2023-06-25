import { ApolloClient, InMemoryCache } from "@apollo/client";

const GraphQLClient = new ApolloClient({
  uri: "https://eminent-bird-74.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret': 'svPDmIVsKb5AZOTbcOQD1bRop9V15YxLmS3iohaAvN8MC4r3TRQWGRsikq2cnVFB' // Replace with your actual admin secret key
  }
});

export default GraphQLClient;
