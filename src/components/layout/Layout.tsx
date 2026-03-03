import Header from "./Header";
import Footer from "./Footer";
import type { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode
}


export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <header>
        <Header />{" "}
      </header>

      <main>{children}</main>
      <Footer />
    </div>
  );
};
