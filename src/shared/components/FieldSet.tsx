import type { ReactNode } from "react";

type FieldSetProps = {
	legend?: string
	children: ReactNode
}

export default function FieldSet({ legend, children }:FieldSetProps) {
	return (
		<fieldset className="flex pt-1 gap-2 items-center min-w-0">
			{legend && <legend className="font-bold text-sm">{legend}</legend>}
			{children}
		</fieldset>
	)
}