import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { Book } from "../interfaces/BookInterface";

interface BookDetailsProps {
    book: Book;
}

const BookDetails: React.FC<BookDetailsProps> = ({
    book: { author, title, id, isbn },
}) => {
    const { removeBook } = useContext(BookContext);

    return (
        <div onClick={() => removeBook(id)}>
            <div>{title}</div>
            <div>{author}</div>
            <div>{isbn}</div>
        </div>
    );
};

export default BookDetails;
