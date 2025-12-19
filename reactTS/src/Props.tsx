import type { PropsWithChildren, ReactNode } from "react";

interface SectionProps extends PropsWithChildren {
  title: ReactNode; // can be text, JSX, icon, etc.
  footer?: ReactNode; // optional slot
}

export function Section({ title, footer, children }: SectionProps) {
  return (
    <section style={{ border: "1px solid #ddd", padding: "16px" }}>
      <header>{title}</header>

      <main>{children}</main>

      {footer && <footer>{footer}</footer>}
    </section>
  );
}
