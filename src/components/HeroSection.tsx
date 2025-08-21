import { Button } from "@/components/ui/button";
import heroDevices from "@/assets/hero-devices-ton.jpg";

const HeroSection = () => {
  return (
    <section className="bg-primary text-primary-foreground py-16 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10 relative">
            <div className="space-y-6">
              <div className="bg-primary-glow/20 rounded-lg p-4 text-center inline-block">
                <h2 className="text-lg font-bold">Promoção Agosto de 2025</h2>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Maquininhas com até{" "}
                <span className="text-green-400">80% de Desconto</span>{" "}
                <span className="text-green-400">e as menores taxas do Brasil!</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed">
                Garantia vitalícia, suporte 24 horas, reposição de bobina gratuita e recebimento do dinheiro das vendas no mesmo dia!
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white text-primary rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl lg:text-4xl font-bold text-green-500">0,59%</div>
                <div className="text-sm font-medium mt-2">Débito e Crédito</div>
              </div>
              <div className="bg-white text-primary rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl lg:text-4xl font-bold text-green-500">7,99%</div>
                <div className="text-sm font-medium mt-2">em 12x no crédito</div>
              </div>
              <div className="bg-white text-primary rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl lg:text-4xl font-bold text-green-500">0%</div>
                <div className="text-sm font-medium mt-2">de taxa no Pix</div>
              </div>
            </div>

            <Button 
              variant="default" 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              CONHEÇA NOSSAS TAXAS
            </Button>
          </div>

          <div className="relative lg:justify-self-end">
            <img 
              src={heroDevices} 
              alt="Maquininhas Ton e aplicativos de pagamento" 
              className="w-full h-auto max-w-lg mx-auto lg:mx-0"
            />
          </div>
        </div>
        
        {/* Seção inferior com countdown */}
        <div className="mt-16 bg-green-400 rounded-2xl p-8 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-2">
            Por tempo limitado!
          </h3>
          <p className="text-xl font-bold text-primary mb-6">
            A OFERTA ENCERRA EM:
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <div className="bg-white rounded-full px-6 py-4 min-w-[100px]">
              <div className="text-3xl font-bold text-primary">00</div>
              <div className="text-sm text-primary/70">Dias</div>
            </div>
            <div className="bg-white rounded-full px-6 py-4 min-w-[100px]">
              <div className="text-3xl font-bold text-primary">05</div>
              <div className="text-sm text-primary/70">Horas</div>
            </div>
            <div className="bg-white rounded-full px-6 py-4 min-w-[100px]">
              <div className="text-3xl font-bold text-primary">26</div>
              <div className="text-sm text-primary/70">Min</div>
            </div>
            <div className="bg-white rounded-full px-6 py-4 min-w-[100px]">
              <div className="text-3xl font-bold text-primary">56</div>
              <div className="text-sm text-primary/70">Seg</div>
            </div>
          </div>
          
          <Button 
            variant="default" 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full shadow-lg"
          >
            🛒 QUERO APROVEITAR
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;