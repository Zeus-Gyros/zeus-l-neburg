import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "dark";
  external?: boolean;
  className?: string;
  onClick?: () => void;
};

export function Button({ href, children, variant = "primary", external = false, className = "", onClick }: ButtonProps) {
  return (
    <a
      className={`button button--${variant} ${className}`}
      href={href}
      onClick={onClick}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
    >
      {children}
      {external && <span className="visually-hidden"> (öffnet in neuem Tab)</span>}
    </a>
  );
}
