import { type ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="w-full px-6 md:px-16 lg:px-32">
      {children}
    </div>
  )
}