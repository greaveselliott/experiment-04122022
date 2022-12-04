import React, { ReactNode } from "react";
import Link from "next/link";

export const Navigation: React.FC<{ children: ReactNode }> = ({ children }) => (
  <nav role="navigation" aria-label="Main">
    <ul>{children}</ul>
  </nav>
);

export const NavigationLink: React.FC<{
  children: ReactNode;
  href: string;
}> = ({ children, ...rest }) => (
  <li>
    <Link {...rest}>{children}</Link>
  </li>
);
