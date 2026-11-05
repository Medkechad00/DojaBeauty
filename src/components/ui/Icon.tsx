export type IconName = "arrow" | "external" | "pin" | "clock" | "message" | "phone" | "menu" | "close" | "spark" | "info";

const paths: Record<IconName, React.ReactNode> = {
  arrow: <><path d="M4 12h15M13 5l7 7-7 7" /></>,
  external: <><path d="M7 17 18 6M6 6h12v12" /></>,
  pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  message: <><path d="M21 11.5a9 9 0 0 1-13.2 8L3 21l1.5-4.8A9 9 0 1 1 21 11.5Z" /><path d="M8 10h8M8 14h5" /></>,
  phone: <path d="m8 3 3 5-3 2c1 3 3 5 6 6l2-3 5 3c0 3-2 5-5 5C9 20 4 15 3 8c0-3 2-5 5-5Z" />,
  menu: <><path d="M4 8h16M4 16h16" /></>,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  spark: <path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z" />,
  info: <><circle cx="12" cy="12" r="9" /><path d="M12 11v6M12 7v.5" /></>,
};

export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  return <svg className={`icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
