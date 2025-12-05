import { type ButtonHTMLAttributes } from "react";

type ButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  variant,
  children,
  ...props
}: ButtonPropsType) {
  const classes =
    variant === "primary"
      ? "bg-primary-light text-backgroundLigher px-4 py-2 rounded hover:bg-primary hover:cursor-pointer disabled:opacity-50"
      : "bg-black-100 text-white px-4 py-2 rounded hover:bg-gray-500 disabled:opacity-50 hover:cursor-pointer";

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
}
