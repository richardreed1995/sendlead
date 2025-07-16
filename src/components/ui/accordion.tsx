"use client";
import * as React from "react";

const AccordionContext = React.createContext<{
  openItem: string | null;
  setOpenItem: (id: string | null) => void;
  collapsible: boolean;
} | null>(null);

interface AccordionProps {
  type?: "single";
  collapsible?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Accordion({ type = "single", collapsible = false, className, children }: AccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(null);
  return (
    <AccordionContext.Provider value={{ openItem, setOpenItem, collapsible }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

export function AccordionItem({ value, className, children }: AccordionItemProps) {
  const ctx = React.useContext(AccordionContext);
  if (!ctx) throw new Error("AccordionItem must be used within Accordion");
  const isOpen = ctx.openItem === value;
  return (
    <div className={className} data-state={isOpen ? "open" : "closed"}>
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<any>, { isOpen, value })
          : child
      )}
    </div>
  );
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
  value?: string;
  isOpen?: boolean;
}

export function AccordionTrigger({ children, className, value, isOpen }: AccordionTriggerProps) {
  const ctx = React.useContext(AccordionContext);
  if (!ctx || value === undefined) return null;
  return (
    <button
      className={className}
      aria-expanded={isOpen}
      onClick={() => ctx.setOpenItem(ctx.openItem === value && ctx.collapsible ? null : value)}
      type="button"
    >
      {children}
    </button>
  );
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
  value?: string;
  isOpen?: boolean;
}

export function AccordionContent({ children, className, isOpen }: AccordionContentProps) {
  return isOpen ? <div className={className}>{children}</div> : null;
} 