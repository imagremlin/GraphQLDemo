import { useQuery } from "@apollo/client/react";
import { GET_BOOKS } from "../graphql/queries";
import { BookItem } from "./BookItem";

interface BookListProps {
  isLoggedIn: boolean;
}

export function BookList({ isLoggedIn }: BookListProps) {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>Error loading books: {error.message}</p>;

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {data?.books.map((book) => (
          <BookItem key={book.id} book={book} isLoggedIn={isLoggedIn} />
        ))}
      </ul>
    </div>
  );
}