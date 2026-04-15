import Header from "./Header";
import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full min-h-screen md:scale-150 md:origin-top">
      <header>
        <Header />{" "}
      </header>

      <main>{children}</main>
    </div>
  );
};
