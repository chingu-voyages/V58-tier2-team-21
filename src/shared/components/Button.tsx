import { type ButtonHTMLAttributes } from "react";

type ButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "filter";
};

export default function Button({
  variant,
  className = "",
  children,
  ...props
}: ButtonPropsType) {
  const classes =
    variant === "primary"
      ? "bg-primary-light text-backgroundLigher px-4 py-2 rounded hover:bg-primary hover:cursor-pointer disabled:opacity-50"
      : variant === "secondary"
        ? "bg-black-100 text-white px-4 py-2 rounded hover:bg-gray-500 disabled:opacity-50 hover:cursor-pointer"
        : "bg-secondary-light text-backgroundLigher px-4 py-2 rounded hover:bg-primary hover:cursor-pointer disabled:opacity-50";

  return (
    <button {...props} className={`${classes} ${className}`}>
      {children}
    </button>
  );
}
