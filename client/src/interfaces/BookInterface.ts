export interface Book {
    id: number;
    title: string;
    author: string;
    isbn: string;
}

export interface BookInput {
    title: string;
    author: string;
    isbn: string;
}
