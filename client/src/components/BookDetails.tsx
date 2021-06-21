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
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{author}</td>
            <td>{isbn}</td>
            <td>
                <div
                    onClick={() => removeBook(id)}
                    style={{
                        cursor: "pointer",
                    }}
                >
                    <span
                        className="iconify"
                        data-icon="ion:trash-bin"
                        data-inline="false"
                        style={{
                            color: "red",
                            width: "30px",
                            height: "30px",
                        }}
                    ></span>
                </div>
            </td>
        </tr>
    );
};

export default BookDetails;
