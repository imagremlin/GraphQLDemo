import { gql, type TypedDocumentNode } from "@apollo/client";
import type { GetBooksQuery, GetBooksQueryVariables } from "../generated/graphql";

export const GET_BOOKS : TypedDocumentNode<GetBooksQuery, GetBooksQueryVariables> = gql`
  query GetBooks {
    books {
      id
      title
      author
      reviews {
        id
        content
        rating
      }
    }
  }
`;