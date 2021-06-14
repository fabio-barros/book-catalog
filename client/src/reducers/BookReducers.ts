import { Book } from "../interfaces/BookInterface";

export enum ActionType {
    REQUEST = "REQUEST",
    SUCCESS = "SUCCESS",
    FAILURE = "FAILURE",
    ADD = "ADD",
    REMOVE = "REMOVE",
}

export type ListAction =
    | { type: ActionType.REQUEST }
    | { type: ActionType.SUCCESS; payload: Book[] }
    | { type: ActionType.FAILURE; error: string }
    | { type: ActionType.ADD; payload: Book }
    | { type: ActionType.REMOVE; id: number };

interface State {
    data: Book[];
    isLoading?: boolean;
    error?: string;
}

export const bookReducer = (state: State, action: ListAction): State => {
    switch (action.type) {
        case ActionType.REQUEST:
            return { isLoading: true, data: [] };

        case ActionType.SUCCESS:
            return { isLoading: false, data: action.payload };

        case ActionType.FAILURE:
            return { isLoading: false, data: [], error: action.error };
        case ActionType.ADD:
            return { data: [...state.data, action.payload] };
        case ActionType.REMOVE:
            console.log("remove");
            return { data: state.data.filter((book) => book.id !== action.id) };

        default:
            return state;
    }
};
