import { Heart, Award, Users } from "lucide-react";

export function StoryBanner() {
  return (
    <div className="bg-gradient-to-r from-[#7A4F33] via-[#C43F2E] to-[#7A4F33] py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-[#F5C056]" />
            <h3 className="text-[#F5E9D3] text-2xl md:text-3xl font-serif">Nuestra Historia</h3>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-[#F5C056]/30 shadow-xl">
          <div className="space-y-6 text-[#F5E9D3] text-sm md:text-base leading-relaxed text-justify md:text-center">
            <p>
              Nuestra historia comenzó con la valentía de mis abuelos, quienes llegaron a esta tierra buscando un futuro mejor. Mientras Yumbo crecía como potencia industrial, fue mi abuela quien encendió la chispa de la tradición, fundando el primer asadero y convirtiéndose en la pionera del sector.
            </p>
            <p>
              Llevamos más de 35 años en el corazón del municipio, ofreciendo ese auténtico lechón asado que muchos reconocen como huilense o gobernado. Un sabor que ha pasado la prueba del tiempo.
            </p>
            <p>
              Este sueño lo hemos sostenido tres hermanos. Aunque uno de nosotros hoy nos cuida desde el cielo, su pasión sigue viva en cada plato que servimos. Gracias a ustedes y a las redes sociales, esta familia sigue creciendo y manteniendo viva la llama de la tradición.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-40 mt-8 pt-8 border-t border-[#F5C056]/20">

            <div className="flex flex-col items-center gap-2 text-center min-w-[180px] sm:mx-8">
              <Award className="w-8 h-8 text-[#F5C056]" />
              <div>
                <h4 className="text-[#F5E9D3] font-bold">Pioneros en Yumbo</h4>
                <p className="text-[#F5E9D3]/70 text-xs">Fundado por nuestra abuela</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 text-center min-w-[180px] sm:mx-8">
              <Users className="w-8 h-8 text-[#F5C056]" />
              <div>
                <h4 className="text-[#F5E9D3] font-bold">35+ Años</h4>
                <p className="text-[#F5E9D3]/70 text-xs">Tradición familiar</p>   
              </div>
            </div>

          </div>



        </div>
      </div>
    </div>
  );
}
