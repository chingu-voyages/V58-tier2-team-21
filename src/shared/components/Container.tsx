import { type ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-full px-6 sm:px-12 md:px-16 xl:px-32">
      {children}
    </div>
  );
}
