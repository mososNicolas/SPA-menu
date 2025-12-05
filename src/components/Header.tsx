import { MapPin, Clock, Phone } from "lucide-react";

export function Header() {
  return (
    <header className="bg-gradient-to-br from-[#C43F2E] via-[#E66A2C] to-[#F5C056] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border-4 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border-4 border-white rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-3">
            <span className="text-[#F5E9D3] text-xs md:text-sm uppercase tracking-widest">Auténtica Lechona Tolimense · Pioneros del Sector</span>
          </div>
          <h1 className="text-white mb-3 text-3xl md:text-5xl lg:text-6xl" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            La Mejor Lechona de Yumbo
          </h1>

          {/* New Heritage Badge */}
          <div className="mb-6 flex justify-center">
            <div className="bg-white/15 backdrop-blur-sm border-2 border-[#F5E9D3]/50 rounded-full px-6 py-2 inline-flex items-center gap-2">
              <span className="text-[#F5E9D3] text-lg">🏆</span>
              <span className="text-[#F5E9D3] text-sm md:text-base">Fundado por nuestra abuela · Legado de 3 generaciones</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm">
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full">
              <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
              <span>Transversal 2 norte 10N-24, Barrio Lleras</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full">
              <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">Viernes desde las 10:30 hasta agotar existencias</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full">
              <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">+57 314 681 9561</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full">
              <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">+57 322 6146468</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#7A4F33] py-3 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#F5E9D3]">🔥 ¡Pedidos por WhatsApp! Tradición y Calidad desde el siglo pasado 🔥</p>
        </div>
      </div>
    </header>
  );
}
