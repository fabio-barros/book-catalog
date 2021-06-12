import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { Book } from "../interfaces/BookInterface";

interface BookDetailsProps {
    book: Book;
}

export const BookDetails: React.FC<BookDetailsProps> = ({
    book: { author, title, id },
}) => {
    const { removeBook } = useContext(BookContext);

    return (
        <li key={id} onClick={() => removeBook(id)}>
            <div>{title}</div>
            <div>{author}</div>
        </li>
    );
};
