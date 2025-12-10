import type { ReactNode } from "react";
import { ChoicesContext } from "./ChoiceContext.ts";

type ChoicesProps = {
	name: string;
	type: "radio" | "checkbox"
	children: ReactNode
};

export default function Choices({ name, type, children }: ChoicesProps) {
	return (
		<ChoicesContext.Provider value={{ name, type }}>
			<div className="flex items-center gap-x-2 gap-y-5 flex-wrap">
				{children}
			</div>
		</ChoicesContext.Provider>
	);
}
