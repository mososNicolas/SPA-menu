import { ReactNode } from "react";

interface MenuSectionProps {
  title: string;
  icon: ReactNode;
  children?: ReactNode;
}

export function MenuSection({ title, icon, children }: MenuSectionProps) {
  return (
    <div className="mb-14 scroll-mt-20" id={title.toLowerCase().replace(/\s+/g, '-')}>
      <div className="flex items-center gap-4 mb-8 pb-3 border-b-4 border-[#E66A2C]">
        <div className="text-[#C43F2E] bg-[#F5C056]/20 p-3 rounded-xl">
          {icon}
        </div>
        <div className="flex-1">
          <h2 className="text-[#7A4F33] tracking-wider text-lg md:text-xl">
            {title}
          </h2>
        </div>
      </div>
      <div className="space-y-8 md:space-y-7">
        {children}
      </div>
    </div>
  );
}