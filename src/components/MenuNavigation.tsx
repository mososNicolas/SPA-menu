import { Star, Utensils, Coffee } from "lucide-react";

interface MenuNavigationProps {
  activeSection?: string;
}

export function MenuNavigation({ activeSection }: MenuNavigationProps) {
  const sections = [
    { id: "especialidades-de-la-casa", label: "Especialidades", icon: <Star className="w-4 h-4" /> },
    { id: "acompañamientos-tradicionales", label: "Acompañamientos", icon: <Utensils className="w-4 h-4" /> },
    { id: "bebidas-refrescantes", label: "Bebidas", icon: <Coffee className="w-4 h-4" /> }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm shadow-md border-b-2 border-[#E66A2C]/30 mb-8">
      <div className="flex justify-center gap-2 sm:gap-4 p-4 overflow-x-auto">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap text-sm ${
              activeSection === section.id
                ? 'bg-gradient-to-r from-[#C43F2E] to-[#E66A2C] text-white shadow-lg scale-105'
                : 'bg-[#F5E9D3] text-[#7A4F33] hover:bg-[#F5C056]/50 hover:scale-105'
            }`}
          >
            <span className={activeSection === section.id ? 'text-white' : 'text-[#C43F2E]'}>
              {section.icon}
            </span>
            <span>{section.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
