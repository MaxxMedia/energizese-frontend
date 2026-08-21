import Link from "next/link";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1405px] px-5 md:px-8", className)}>
      {children}
    </div>
  );
}

export function Button({
  href,
  children,
  className,
  type = "button",
  light = false,
  disabled,
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  light?: boolean;
  disabled?: boolean;
}) {
  const classes = cn(
    "group inline-flex items-center justify-center rounded-full border px-8 py-3.5 pr-20 text-[15px] font-semibold uppercase tracking-wide transition",
    light
      ? "border-white text-white hover:bg-white hover:text-[#2c3248]"
      : "border-[#f15b29] text-[#f15b29] hover:border-[#2c3248] hover:text-[#2c3248]",
    disabled && "pointer-events-none opacity-60",
    className
  );

  const arrow = (
    <span
      className="absolute right-7 h-[18px] w-[43px] bg-center bg-no-repeat transition-[right] duration-300 group-hover:right-5"
      style={{
        backgroundImage: light
          ? "url(/assets/images/icon-arrow.png)"
          : "url(/assets/images/icon-arrow-blue.png)",
      }}
    />
  );

  if (href) {
    return (
      <Link href={href} className={cn(classes, "relative")}>
        {children}
        {arrow}
      </Link>
    );
  }

  return (
    <button type={type} className={cn(classes, "relative")} disabled={disabled}>
      {children}
      {arrow}
    </button>
  );
}

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container className="max-w-4xl text-center">
        {eyebrow ? (
          <p className="mb-4 text-[36px] font-bold tracking-[1px] text-[#2c3248] md:text-[52px]">
            {eyebrow}
          </p>
        ) : null}
        {title ? (
          <h1 className="mb-6 text-[36px] font-bold tracking-[1px] text-[#2c3248] md:text-[52px]">
            {title}
          </h1>
        ) : null}
        {children ? (
          <div className="text-[18px] leading-8 text-[#454c60] md:text-[21px]">{children}</div>
        ) : null}
      </Container>
    </section>
  );
}

export const fieldClass =
  "w-full rounded-md border border-white/25 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/50 focus:border-orange";

export const labelClass = "mb-2 block text-sm font-medium text-white";

export function StatusBanner({
  status,
  message,
}: {
  status: "idle" | "loading" | "success" | "error";
  message: string;
}) {
  if (status === "idle" || status === "loading") return null;
  return (
    <p
      className={cn(
        "mb-6 rounded-md px-4 py-3 text-sm",
        status === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
      )}
    >
      {message}
    </p>
  );
}
