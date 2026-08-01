import { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { UPDATE_BOOK, DELETE_BOOK } from "../graphql/mutations";
import { GET_BOOKS } from "../graphql/queries";
import type { Book, UpdateBookPayload, DeleteBookPayload } from "../types";

interface UpdateBookData {
  updateBook: UpdateBookPayload;
}

interface DeleteBookData {
  deleteBook: DeleteBookPayload;
}

interface GetBooksData {
  books: Book[];
}

interface BookItemProps {
  book: Book;
  isLoggedIn: boolean;
}

export function BookItem({ book, isLoggedIn }: BookItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);

  const [updateBook, { loading: updating }] = useMutation<UpdateBookData>(UPDATE_BOOK);

  const [deleteBook, { loading: deleting }] = useMutation<DeleteBookData>(DELETE_BOOK, {
    update(cache, result) {
      const success = result.data?.deleteBook.success;
      if (!success) return;

      const existing = cache.readQuery<GetBooksData>({ query: GET_BOOKS });
      if (!existing) return;

      cache.writeQuery<GetBooksData>({
        query: GET_BOOKS,
        data: { books: existing.books.filter((b) => b.id !== book.id) },
      });
    },
  });

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await updateBook({
      variables: {
        input: { id: book.id, title, author, clientMutationId: null },
      },
    });

    if (result.data?.updateBook.success) {
      setIsEditing(false);
    } else {
      alert(result.data?.updateBook.message ?? "Failed to update book.");
    }
  };

  const handleDelete = async () => {
    if (!confirm(`Delete "${book.title}"?`)) return;

    const result = await deleteBook({
      variables: { input: { id: book.id, clientMutationId: null } },
    });

    if (!result.data?.deleteBook.success) {
      alert(result.data?.deleteBook.message ?? "Failed to delete book.");
    }
  };

  if (isEditing) {
    return (
      <li>
        <form onSubmit={handleUpdate}>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <input value={author} onChange={(e) => setAuthor(e.target.value)} />
          <button type="submit" disabled={updating}>
            {updating ? "Saving..." : "Save"}
          </button>
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </form>
      </li>
    );
  }

  return (
    <li>
      <strong>{book.title}</strong> by {book.author}
      {isLoggedIn && (
        <>
          {" "}
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete} disabled={deleting}>
            {deleting ? "Deleting..." : "Delete"}
          </button>
        </>
      )}
      {book.reviews.length > 0 && (
        <ul>
          {book.reviews.map((review) => (
            <li key={review.id}>
              {review.content} ({review.rating}/5)
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}