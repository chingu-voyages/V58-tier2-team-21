import { type ReactNode } from "react";
import clsx from "clsx";
import { useEffect } from "react";

type sideType = "right" | "left";
type breakpointType = "sm" | "md" | "lg";

type DrawerProps = {
  children: ReactNode;
  side: sideType;
  breakpoint: breakpointType;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function Drawer({
  children,
  side,
  breakpoint,
  open,
  setOpen,
}: DrawerProps) {
  useEffect(() => {
    const collapseNav = () => setOpen(false);
    window.addEventListener("resize", collapseNav);
    return () => window.removeEventListener("resize", collapseNav);
  }, [setOpen]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, setOpen]);

  const opposite: sideType = side === "right" ? "left" : "right";

  const transitionClass = {
    left: "transition-[left]",
    right: "transition-[right]",
  }[opposite];

  const positionClass = open
    ? { left: "left-0", right: "right-0" }[opposite]
    : { left: "left-full", right: "right-full" }[opposite];

  const breakpointClass = {
    sm: "sm:static sm:w-auto sm:h-full sm:bg-transparent sm:overflow-hidden",
    md: "md:static md:w-auto md:h-full md:bg-transparent md:overflow-hidden",
    lg: "lg:static lg:w-auto lg:h-full lg:bg-transparent lg:overflow-hidden",
  }[breakpoint];

  return (
    <div
      className={clsx(
        `fixed top-0 w-screen h-screen flex z-1 ${transitionClass} duration-300`,
        `${side === "right" ? "justify-end" : "justify-start"} ${positionClass}`,
        breakpointClass,
      )}
    >
      {children}
    </div>
  );
}
