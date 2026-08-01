/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AddBookInput = {
  author: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type AddBookPayload = {
  __typename?: 'AddBookPayload';
  book?: Maybe<Book>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type AddReviewInput = {
  bookId: Scalars['Int']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
};

export type AddReviewPayload = {
  __typename?: 'AddReviewPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  review?: Maybe<Review>;
  success: Scalars['Boolean']['output'];
};

/** Defines when a policy shall be executed. */
export enum ApplyPolicy {
  /** After the resolver was executed. */
  AfterResolver = 'AFTER_RESOLVER',
  /** Before the resolver was executed. */
  BeforeResolver = 'BEFORE_RESOLVER',
  /** The policy is applied in the validation step before the execution. */
  Validation = 'VALIDATION'
}

export type AuthPayload = {
  __typename?: 'AuthPayload';
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type Book = {
  __typename?: 'Book';
  author: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  reviews: Array<Review>;
  reviewsManual: Array<Review>;
  title: Scalars['String']['output'];
};

export type BookFilterInput = {
  and?: InputMaybe<Array<BookFilterInput>>;
  author?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<BookFilterInput>>;
  reviews?: InputMaybe<ListFilterInputTypeOfReviewFilterInput>;
  title?: InputMaybe<StringOperationFilterInput>;
};

export type BookSortInput = {
  author?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  title?: InputMaybe<SortEnumType>;
};

export type DeleteBookInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
};

export type DeleteBookPayload = {
  __typename?: 'DeleteBookPayload';
  bookId: Scalars['Int']['output'];
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type DeleteReviewInput = {
  bookId: Scalars['Int']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  reviewId: Scalars['Int']['input'];
};

export type DeleteReviewPayload = {
  __typename?: 'DeleteReviewPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  reviewId: Scalars['Int']['output'];
  success: Scalars['Boolean']['output'];
};

export type IntOperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
  ngt?: InputMaybe<Scalars['Int']['input']>;
  ngte?: InputMaybe<Scalars['Int']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  nlt?: InputMaybe<Scalars['Int']['input']>;
  nlte?: InputMaybe<Scalars['Int']['input']>;
};

export type ListFilterInputTypeOfReviewFilterInput = {
  all?: InputMaybe<ReviewFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ReviewFilterInput>;
  some?: InputMaybe<ReviewFilterInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBook: AddBookPayload;
  addReview: AddReviewPayload;
  deleteBook: DeleteBookPayload;
  deleteReview: DeleteReviewPayload;
  login: AuthPayload;
  register: AuthPayload;
  updateBook: UpdateBookPayload;
  updateReview: UpdateReviewPayload;
};


export type MutationAddBookArgs = {
  input: AddBookInput;
};


export type MutationAddReviewArgs = {
  input: AddReviewInput;
};


export type MutationDeleteBookArgs = {
  input: DeleteBookInput;
};


export type MutationDeleteReviewArgs = {
  input: DeleteReviewInput;
};


export type MutationLoginArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationUpdateBookArgs = {
  input: UpdateBookInput;
};


export type MutationUpdateReviewArgs = {
  input: UpdateReviewInput;
};

export type Query = {
  __typename?: 'Query';
  books: Array<Book>;
};


export type QueryBooksArgs = {
  order?: InputMaybe<Array<BookSortInput>>;
  where?: InputMaybe<BookFilterInput>;
};

export type Review = {
  __typename?: 'Review';
  book: Book;
  bookId: Scalars['Int']['output'];
  content: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  rating: Scalars['Int']['output'];
};

export type ReviewFilterInput = {
  and?: InputMaybe<Array<ReviewFilterInput>>;
  book?: InputMaybe<BookFilterInput>;
  bookId?: InputMaybe<IntOperationFilterInput>;
  content?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<ReviewFilterInput>>;
  rating?: InputMaybe<IntOperationFilterInput>;
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ncontains?: InputMaybe<Scalars['String']['input']>;
  nendsWith?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nstartsWith?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBookInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBookPayload = {
  __typename?: 'UpdateBookPayload';
  book?: Maybe<Book>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type UpdateReviewInput = {
  bookId: Scalars['Int']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  reviewId: Scalars['Int']['input'];
};

export type UpdateReviewPayload = {
  __typename?: 'UpdateReviewPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  review?: Maybe<Review>;
  success: Scalars['Boolean']['output'];
};

export type AddBookInput = {
  author: string;
  clientMutationId?: string | null | undefined;
  title: string;
};

export type AddReviewInput = {
  bookId: number;
  clientMutationId?: string | null | undefined;
  content: string;
  rating: number;
};

export type DeleteBookInput = {
  clientMutationId?: string | null | undefined;
  id: number;
};

export type UpdateBookInput = {
  author?: string | null | undefined;
  clientMutationId?: string | null | undefined;
  id: number;
  title?: string | null | undefined;
};

export type LoginMutationVariables = Exact<{
  username: string;
  password: string;
}>;


export type LoginMutation = { login: { success: boolean, token: string | null, message: string | null } };

export type RegisterMutationVariables = Exact<{
  username: string;
  password: string;
}>;


export type RegisterMutation = { register: { success: boolean, message: string | null } };

export type AddBookMutationVariables = Exact<{
  input: AddBookInput;
}>;


export type AddBookMutation = { addBook: { success: boolean, message: string | null, book: { id: number, title: string, author: string, reviews: Array<{ id: number, content: string, rating: number }> } | null } };

export type UpdateBookMutationVariables = Exact<{
  input: UpdateBookInput;
}>;


export type UpdateBookMutation = { updateBook: { success: boolean, message: string | null, book: { id: number, title: string, author: string } | null } };

export type DeleteBookMutationVariables = Exact<{
  input: DeleteBookInput;
}>;


export type DeleteBookMutation = { deleteBook: { success: boolean, message: string | null, bookId: number } };

export type AddReviewMutationVariables = Exact<{
  input: AddReviewInput;
}>;


export type AddReviewMutation = { addReview: { success: boolean, message: string | null, review: { id: number, content: string, rating: number } | null } };

export type GetBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBooksQuery = { books: Array<{ id: number, title: string, author: string, reviews: Array<{ id: number, content: string, rating: number }> }> };


export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    success
    token
    message
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($username: String!, $password: String!) {
  register(username: $username, password: $password) {
    success
    message
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const AddBookDocument = gql`
    mutation AddBook($input: AddBookInput!) {
  addBook(input: $input) {
    success
    message
    book {
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
}
    `;
export type AddBookMutationFn = Apollo.MutationFunction<AddBookMutation, AddBookMutationVariables>;

/**
 * __useAddBookMutation__
 *
 * To run a mutation, you first call `useAddBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBookMutation, { data, loading, error }] = useAddBookMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddBookMutation(baseOptions?: Apollo.MutationHookOptions<AddBookMutation, AddBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddBookMutation, AddBookMutationVariables>(AddBookDocument, options);
      }
export type AddBookMutationHookResult = ReturnType<typeof useAddBookMutation>;
export type AddBookMutationResult = Apollo.MutationResult<AddBookMutation>;
export type AddBookMutationOptions = Apollo.BaseMutationOptions<AddBookMutation, AddBookMutationVariables>;
export const UpdateBookDocument = gql`
    mutation UpdateBook($input: UpdateBookInput!) {
  updateBook(input: $input) {
    success
    message
    book {
      id
      title
      author
    }
  }
}
    `;
export type UpdateBookMutationFn = Apollo.MutationFunction<UpdateBookMutation, UpdateBookMutationVariables>;

/**
 * __useUpdateBookMutation__
 *
 * To run a mutation, you first call `useUpdateBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBookMutation, { data, loading, error }] = useUpdateBookMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBookMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBookMutation, UpdateBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBookMutation, UpdateBookMutationVariables>(UpdateBookDocument, options);
      }
export type UpdateBookMutationHookResult = ReturnType<typeof useUpdateBookMutation>;
export type UpdateBookMutationResult = Apollo.MutationResult<UpdateBookMutation>;
export type UpdateBookMutationOptions = Apollo.BaseMutationOptions<UpdateBookMutation, UpdateBookMutationVariables>;
export const DeleteBookDocument = gql`
    mutation DeleteBook($input: DeleteBookInput!) {
  deleteBook(input: $input) {
    success
    message
    bookId
  }
}
    `;
export type DeleteBookMutationFn = Apollo.MutationFunction<DeleteBookMutation, DeleteBookMutationVariables>;

/**
 * __useDeleteBookMutation__
 *
 * To run a mutation, you first call `useDeleteBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBookMutation, { data, loading, error }] = useDeleteBookMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteBookMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBookMutation, DeleteBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBookMutation, DeleteBookMutationVariables>(DeleteBookDocument, options);
      }
export type DeleteBookMutationHookResult = ReturnType<typeof useDeleteBookMutation>;
export type DeleteBookMutationResult = Apollo.MutationResult<DeleteBookMutation>;
export type DeleteBookMutationOptions = Apollo.BaseMutationOptions<DeleteBookMutation, DeleteBookMutationVariables>;
export const AddReviewDocument = gql`
    mutation AddReview($input: AddReviewInput!) {
  addReview(input: $input) {
    success
    message
    review {
      id
      content
      rating
    }
  }
}
    `;
export type AddReviewMutationFn = Apollo.MutationFunction<AddReviewMutation, AddReviewMutationVariables>;

/**
 * __useAddReviewMutation__
 *
 * To run a mutation, you first call `useAddReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addReviewMutation, { data, loading, error }] = useAddReviewMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddReviewMutation(baseOptions?: Apollo.MutationHookOptions<AddReviewMutation, AddReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddReviewMutation, AddReviewMutationVariables>(AddReviewDocument, options);
      }
export type AddReviewMutationHookResult = ReturnType<typeof useAddReviewMutation>;
export type AddReviewMutationResult = Apollo.MutationResult<AddReviewMutation>;
export type AddReviewMutationOptions = Apollo.BaseMutationOptions<AddReviewMutation, AddReviewMutationVariables>;
export const GetBooksDocument = gql`
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

/**
 * __useGetBooksQuery__
 *
 * To run a query within a React component, call `useGetBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBooksQuery(baseOptions?: Apollo.QueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, options);
      }
export function useGetBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, options);
        }
// @ts-ignore
export function useGetBooksSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetBooksQuery, GetBooksQueryVariables>): Apollo.UseSuspenseQueryResult<GetBooksQuery, GetBooksQueryVariables>;
export function useGetBooksSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetBooksQuery, GetBooksQueryVariables>): Apollo.UseSuspenseQueryResult<GetBooksQuery | undefined, GetBooksQueryVariables>;
export function useGetBooksSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, options);
        }
export type GetBooksQueryHookResult = ReturnType<typeof useGetBooksQuery>;
export type GetBooksLazyQueryHookResult = ReturnType<typeof useGetBooksLazyQuery>;
export type GetBooksSuspenseQueryHookResult = ReturnType<typeof useGetBooksSuspenseQuery>;
export type GetBooksQueryResult = Apollo.QueryResult<GetBooksQuery, GetBooksQueryVariables>;