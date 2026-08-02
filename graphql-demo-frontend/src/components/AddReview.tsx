import { useState } from "react";
import { ADD_REVIEW } from "../graphql/mutations";
import { useMutation } from "@apollo/client/react";
import { GET_BOOKS } from "../graphql/queries";
import type { GetBooksQuery } from "../generated/graphql";
interface AddReviewProps {
    bookId: number;
    onClose: () => void;
}

export function AddReviewForm({ bookId, onClose }: AddReviewProps) {

    const [content, setContent] = useState("");
    const [rating, setRating] = useState(1);

    const [addReview, { loading, error }] = useMutation(ADD_REVIEW, {
        update(cache, result) {
            const newReview = result.data?.addReview.review
            if (!newReview) return;

            cache.writeQuery<GetBooksQuery>({
                query: GET_BOOKS,
                data: {
                    books: cache.readQuery<GetBooksQuery>({ query: GET_BOOKS })?.books.map((b) =>
                        b.id === bookId ? { ...b, reviews: [...b.reviews, newReview] } : b
                    ) || [],
                },
            });

        }
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        console.log(`Submitting review for book ID: ${bookId}`);

        const result = await addReview({
            variables: {
                input: { bookId, content, rating, clientMutationId: null },
            },
        });

        const payload = result.data?.addReview;

        if (payload?.success) {
            setContent("");
            setRating(1);
            onClose();
        } else {
            alert(payload?.message ?? "Failed to add review.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a Review</h2>

            <div>
                <label>
                    Content:
                    <input value={content} onChange={(e) => setContent(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Rating:
                    <input type="number" value={rating} min={1} max={5} onChange={(e) => setRating(Number(e.target.value))} />
                </label>
            </div>

            <button type="submit" disabled={loading}>
                {loading ? "Saving..." : "Ok"}
            </button>

            <button type="button" onClick={onClose}>
                Cancel
            </button>

            {error && <p style={{ color: "red" }}>{error.message}</p>}

        </form>
    );
}

