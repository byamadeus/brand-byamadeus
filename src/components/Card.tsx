interface CardProps {
  href: string;
  label: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function Card({ href, label, children, icon }: CardProps) {
  return (
    <a
      href={href}
      className="rounded-xl border border-white/20 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10"
    >
      
      <div className="flex w-full flex-row justify-between"> {icon && (
        <div className="mb-3 text-white/70">
          {icon}
        </div>
      )}
      <p className="mb-4 text-md text-white/50">{label}</p>
      </div>
      <p className="text-white/90 text-xl pt-8">{children}</p>
    </a>
  );
}
