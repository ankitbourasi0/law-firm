import { GraphQLClient, gql } from "graphql-request";

const GRAPHQLAPI = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT);
// console.log("NEXT_PUBLIC_GRAPHCMS_ENDPOINT:  \n ", GRAPHQLAPI);

export async function getAllPost() {
  const QUERY = gql`
    query MyQuery {
      posts {
        title
        slug
        id
        coverImage {
          url
        }
        author {
          name
          photo {
            url
          }
        }
        createdAt
        categories {
          name
        }
      }
    }
  `;

  try {
    const result = await GRAPHQLAPI.request(QUERY);
    // If the promise resolves successfully, the result will be available here
    console.log("GraphQL request result:", result);
    return result;
    // Other operations with the result...
  } catch (error) {
    // If an error occurs during the promise execution, it will be caught here
    console.error("Error handling GraphQL request:", error);
  }
}

export async function getPostDetail(slug) {
  const QUERY = gql`
    query MyQuery($slug: String!) {
      post(where: { slug: $slug }) {
        author {
          bio
          name
          id
          photo {
            url
          }
        }
        categories {
          name
          slug
        }
        coverImage {
          url
        }
        slug
        title
        content {
          raw
        }
      }
    }
  `;

  try {
    const result = await GRAPHQLAPI.request(QUERY, { slug });
    return result.post;
  } catch (error) {
    console.error("Error handling GraphQL request:", error);
  }
}

export async function getComments({ slug }) {
  const QUERY = gql`
    query MyQuery($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        createdAt
        comment
      }
    }
  `;

  try {
    const result = await GRAPHQLAPI.request(QUERY, { slug });
    return result.comments;
  } catch (error) {
    console.error("Error handling GraphQL request:", error);
  }
}

export async function submitComment(obj) {
  const result = await fetch("/api/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  return result.json();
}

export async function getRecentPosts() {
  const QUERY = gql`
    query MyQuery {
      posts(last: 3, orderBy: createdAt_ASC) {
        slug
        title
        coverImage {
          url
        }
        createdAt
      }
    }
  `;

  try {
    const result = await GRAPHQLAPI.request(QUERY);
    return result.posts;
  } catch (error) {
    console.error("Error handling GraphQL request:", error);
  }
}

export async function getSimilarPosts(categories, slug) {
  const QUERY = gql`
    query MyQuery($categories: [String!], $slug: String!) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        slug
        title
        coverImage {
          url
        }
        createdAt
      }
    }
  `;

  try {
    const result = await GRAPHQLAPI.request(QUERY, { categories, slug });
    return result.posts;
  } catch (error) {
    console.error("Error handling GraphQL request:", error);
  }
}

export async function getCategories() {
  const QUERY = gql`
    query MyQuery {
      categories {
        name
        slug
      }
    }
  `;

  try {
    const result = await GRAPHQLAPI.request(QUERY);
    return result.categories;
  } catch (error) {
    console.error("Error handling GraphQL request:", error);
  }
}
