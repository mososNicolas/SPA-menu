import { Header } from "./components/Header";
import { MenuItem } from "./components/MenuItem";
import { MenuSection } from "./components/MenuSection";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { StoryBanner } from "./components/StoryBanner";
import { ChefHat, Coffee, Utensils, Sparkles, Star, Lock } from "lucide-react";

import lechonaPot from "./assets/lechona-pot.jpg";
import lechonaDish from "./assets/lechona-dish.jpg";
import tamalesGroup from "./assets/tamales-group.jpg";
import lechonaCombo from "./assets/lechona-combo.jpg";
import rellena from "./assets/rellena.jpeg";

export default function App() {
  return (
    <div className="min-h-screen bg-[#EDE4D3]">
      <Header />

      {/* Menu Book Container - MAIN FOCUS */}
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Menu Cover */}
        <div className="bg-gradient-to-br from-[#7A4F33] to-[#C43F2E] rounded-t-3xl p-6 sm:p-8 text-center shadow-[0_20px_60px_rgba(122,79,51,0.3)]">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3">
            <ChefHat className="w-8 h-8 sm:w-12 sm:h-12 text-[#F5C056] flex-shrink-0" />
            <h2 className="text-[#F5E9D3] text-2xl sm:text-4xl">Nuestro Menú</h2>
            <ChefHat className="w-8 h-8 sm:w-12 sm:h-12 text-[#F5C056] flex-shrink-0" />
          </div>
          <p className="text-[#F5E9D3]/80 italic text-sm sm:text-base px-2 mb-3">
            Cada plato preparado con amor y tradición familiar
          </p>
          <div className="flex items-center justify-center gap-2 text-[#F5E9D3]/70 text-xs sm:text-sm">
            <span>👵</span>
            <span>Recetas de nuestra abuela · Más de 40 años de tradición</span>
            <span>👵</span>
          </div>
        </div>

        {/* Menu Pages */}
        <div className="bg-white rounded-b-3xl shadow-[0_20px_60px_rgba(122,79,51,0.25)] relative">
          {/* Paper texture effect */}
          <div className="absolute inset-0 opacity-5 pointer-events-none rounded-b-3xl"
            style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #7A4F33 2px, #7A4F33 3px)' }}></div>



          <div className="relative z-10 p-8 sm:p-10 md:p-12 pt-0 ">
            {/* Especialidades de la Casa */}
            <MenuSection
              title="Especialidades de la Casa"
              icon={<Star className="w-8 h-8" />}
            >
              <MenuItem
                name="Lechona (Unidad)"
                description={
                  <span>
                    Nuestra <span className="font-bold text-[#C43F2E] inline-flex items-center gap-1">receta secreta</span> de arroz con carne, acompañada de arepa y cuero extra crocante que es nuestra firma. ¡Incluye tenedor para que la disfrutes al instante!
                  </span>
                }
                price="$14.000"
                image={lechonaCombo}
                isSpecial={true}
              />

              <MenuItem
                name="Rellena Tradicional"
                description="Deliciosa rellena artesanal, preparada con especias naturales y el sabor típico de antaño. El acompañamiento que no puede faltar."
                price="$15.000"
                image={rellena}
                isSpecial={true}
              />

              <MenuItem
                name={<span>Tamal <strong className="text-[#C43F2E]">Tolimense</strong></span>}
                description="Combinación generosa de cerdo, pollo, res y arroz, todo envuelto en hoja de plátano fresca."
                price="$14.000"
                image={tamalesGroup}
                isSpecial={true}
              />

              <MenuItem
                name={<span>Tamal <strong className="text-[#C43F2E]">Valluno</strong></span>}
                description='Masa suave y aliñada con el inigualable "toque de la abuela", rellena de cerdo y pollo. Sabor 100% de la región.'
                price="$14.000"
                image={lechonaPot}
                isSpecial={true}
              />

              <MenuItem
                name="Plato de Lechón (Picada Mixta)"
                description="¡Un festín completo! Carne jugosa de lechón asado, cuero crocante, rellena, papa, yuca y arepa; todo bañado en nuestro guacamole casero."
                price="$27.000"
                image={lechonaDish}
                isSpecial={true}
              />
            </MenuSection>

            {/* Info decorativa */}
            <div className="mt-12 p-6 bg-gradient-to-r from-[#F5C056]/20 to-[#E66A2C]/20 rounded-xl border-2 border-[#E66A2C]/30">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="w-6 h-6 text-[#C43F2E]" />
                <h3 className="text-[#7A4F33]">Nota Importante</h3>
              </div>
              <p className="text-[#7A4F33]/80 text-sm leading-relaxed">
                Todos nuestros productos son preparados diariamente con ingredientes frescos de la región.
                La lechona se prepara en horno de leña siguiendo la receta tradicional familiar.
                <br />
                <strong>Nota:</strong> Para el 24 y 31 de diciembre todos los precios aumentan $1.000.
                <br />
                <strong>Al por mayor:</strong> Los pedidos al por mayor son a partir de 40 cajas con tres días de anticipación.
              </p>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-6 text-center shadow-[0_8px_30px_rgba(122,79,51,0.15)] border-2 border-[#F5C056]">
            <div className="text-[#C43F2E] mb-2 text-3xl">🏆</div>
            <h4 className="text-[#7A4F33] mb-1">Receta Tradicional</h4>
            <p className="text-[#7A4F33]/70 text-sm">Desde 1983</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-[0_8px_30px_rgba(122,79,51,0.15)] border-2 border-[#F5C056]">
            <div className="text-[#E66A2C] mb-2 text-3xl">⭐</div>
            <h4 className="text-[#7A4F33] mb-1">100% Natural</h4>
            <p className="text-[#7A4F33]/70 text-sm">Sin preservantes</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-[0_8px_30px_rgba(122,79,51,0.15)] border-2 border-[#F5C056]">
            <div className="text-[#F5C056] mb-2 text-3xl">🚚</div>
            <h4 className="text-[#7A4F33] mb-1">Entrega Rápida</h4>
            <p className="text-[#7A4F33]/70 text-sm">En Yumbo</p>
          </div>
        </div>
      </div>

      {/* Story Banner - After Menu (Brief) */}
      <StoryBanner />

      {/* Footer */}
      <footer className="bg-[#7A4F33] text-[#F5E9D3] py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Main Footer Content */}
            <div className="text-center mb-8">
              <h3 className="text-[#F5C056] text-2xl mb-3">La Mejor Lechona de Yumbo</h3>
              <p className="text-[#F5E9D3]/90 italic mb-4 max-w-2xl mx-auto">
                Tres generaciones compartiendo el auténtico sabor de la lechona tolimense.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-center gap-6 mb-8 text-center">
              <div>
                <h4 className="text-[#F5C056] mb-2">Ubicación</h4>
                <p className="text-sm text-[#F5E9D3]/80">Transversal 2 norte 10N-24</p>
                <p className="text-sm text-[#F5E9D3]/80">Barrio Lleras, Yumbo</p>
              </div>
              <div>
                <h4 className="text-[#F5C056] mb-2">Contacto</h4>
                <p className="text-sm text-[#F5E9D3]/80">WhatsApp: +57 3146819561</p>
                <p className="text-sm text-[#F5E9D3]/80">WhatsApp: +57 322 6146468</p>
                <p className="text-sm text-[#F5E9D3]/80">Horario: Desde Las 10:30 AM</p>
              </div>
            </div>

            {/* Recognition Banner */}
            <div className="bg-[#C43F2E]/20 rounded-xl p-4 mb-6 text-center">
              <p className="text-[#F5E9D3] text-sm">
                🏆 Auténtico sabor de lechón asado y lechona tolimense 🏆
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-[#F5E9D3]/30 max-w-md mx-auto my-6"></div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-[#F5E9D3]/70 text-sm mb-2">
                © 2025 La Mejor Lechona de Yumbo. Todos los derechos reservados.
              </p>
              <p className="text-[#F5E9D3]/60 text-xs">
                Más de 40 años manteniendo viva la tradición familiar · Gracias por preferirnos 💛
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton
        phoneNumber="573146819561"
        message="Hola! Me gustaría hacer un pedido de lechona 🍖"
      />
    </div>
  );
}
