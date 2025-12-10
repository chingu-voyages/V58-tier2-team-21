import clsx from "clsx";
import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	className?: string;
};

export default function Input({type, name, value, onChange, placeholder, className}: InputProps) {
	return (
		<input
			type={type}
			name={name}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			className={clsx(
				"flex-1 min-w-0 h-9 px-2 rounded-sm bg-white-100 box-border border border-black-100 text-sm",
				"focus:border-2 focus:outline-none",
				className
			)}
		/>
	)
}