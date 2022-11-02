import { createContext } from "react";

const initialState = {
	first: "Mirzam",
	last: "Avicena",
};

const context = createContext<typeof initialState>(initialState);
export type UserState = typeof initialState;

export default context;
