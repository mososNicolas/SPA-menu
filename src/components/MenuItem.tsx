import { ReactNode } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface MenuItemProps {
  name: ReactNode;
  description: ReactNode;
  price: string;
  image?: string;
  isSpecial?: boolean;
  badge?: string;
}

export function MenuItem({ name, description, price, image, isSpecial = false, badge }: MenuItemProps) {
  return(
    <div className={`group relative ${image ? 'flex flex-col sm:flex-row gap-4 sm:gap-6' : ''} py-2`}>
      {image && (
        <div className="relative w-36 h-36 sm:w-32 sm:h-32 rounded-xl overflow-hidden flex-shrink-0 border-3 border-[#E66A2C] shadow-[0_8px_25px_rgba(198,63,46,0.2)] mx-auto sm:mx-0 hover:shadow-[0_12px_35px_rgba(198,63,46,0.35)] transition-all duration-300">
          <ImageWithFallback
            src={image}
            alt={typeof name === 'string' ? name : 'Menu Item'}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {badge && (
            <div className="absolute top-0 right-0 bg-[#F5C056] text-[#7A4F33] text-[10px] font-bold px-2 py-1 rounded-bl-lg shadow-sm z-10">
              {badge}
            </div>
          )}
        </div>
      )}
      
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-6">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h3 className={`${isSpecial ? 'text-[#C43F2E]' : 'text-[#7A4F33]'} tracking-wide break-words transition-colors group-hover:text-[#C43F2E]`}>
                {name}
              </h3>
              {isSpecial && !badge && (
                <span className="text-xs px-2.5 py-1 bg-gradient-to-r from-[#C43F2E] to-[#E66A2C] text-white rounded-full flex-shrink-0 shadow-md">
                  ⭐ Especial
                </span>
              )}
            </div>
            <div className="text-[#7A4F33]/80 text-sm leading-relaxed">
              {description}
            </div>
          </div>
          
          <div className="flex-shrink-0 self-start sm:ml-4">
            <span className="text-[#C43F2E] whitespace-nowrap block text-lg sm:text-xl">
              {price}
            </span>
          </div>
        </div>
        
        <div className="h-px bg-gradient-to-r from-[#E66A2C]/30 via-[#E66A2C]/60 to-transparent mt-4 mb-2"></div>
      </div>
    </div>
  );
}