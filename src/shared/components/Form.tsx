import { type ReactNode, type FormEvent } from "react";

type FormProps = {
	onSubmit: (formData: FormData) => void
	children: ReactNode
}

export default function Form({ children, onSubmit }: FormProps) {
	const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const formData = new FormData(e.currentTarget)
		onSubmit(formData)
	}

	return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col h-full overflow-y-auto pt-8 p-4 bg-white-200 rounded-lg"
    >
      {children}
    </form>
  );
}