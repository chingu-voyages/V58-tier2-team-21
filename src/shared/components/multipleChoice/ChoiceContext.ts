import {
	createContext,
	useContext
} from "react";

type ChoicesContextValue = {
	name: string
	type: "checkbox" | "radio"
};

export const ChoicesContext = createContext<ChoicesContextValue | null>(null);

export function useChoicesContext() {
	const ctx = useContext(ChoicesContext);
	if (!ctx) {
		throw new Error("Choice must be used inside <Choices>");
	}
	return ctx;
}