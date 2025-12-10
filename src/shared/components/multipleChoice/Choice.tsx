import type { InputHTMLAttributes } from "react";
import { useChoicesContext } from "./ChoiceContext";

type ChoiceProps = InputHTMLAttributes<HTMLInputElement> & {
	label: string
};

export default function Choice({ label, value, onChange, checked }: ChoiceProps) {
	const { name, type } = useChoicesContext();

	return (
		<label>
			<input
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				checked={checked}
				className="peer sr-only"
			/>
			<span
				className="text-xs px-4 py-2 text-white-200 bg-secondary-light rounded-sm cursor-pointer peer-checked:bg-secondary"
			>{label}</span>
		</label>
	);
}