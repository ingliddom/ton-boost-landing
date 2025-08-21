import { Button } from "@/components/ui/button";
import heroMachines from "@/assets/hero-machines.jpg";

const HeroSection = () => {
  return (
    <section className="hero-gradient py-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground">
                Brasil!
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                <strong>Garantia vitalícia</strong>, suporte 24 horas, <strong>reposição de bobina gratuita</strong> e recebimento do dinheiro das vendas <strong>no mesmo dia!</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rate-highlight text-center">
                <div className="text-2xl font-bold">0,59%</div>
                <div className="text-sm">no Débito e Crédito</div>
              </div>
              <div className="rate-highlight text-center">
                <div className="text-2xl font-bold">7,99%</div>
                <div className="text-sm">em 12x no crédito</div>
              </div>
              <div className="rate-highlight text-center">
                <div className="text-2xl font-bold">0%</div>
                <div className="text-sm">de taxa no Pix</div>
              </div>
            </div>

            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              CONHEÇA NOSSAS TAXAS
            </Button>
          </div>

          <div className="relative">
            <img 
              src={heroMachines} 
              alt="Maquininhas Ton - Diferentes modelos para seu negócio" 
              className="w-full h-auto rounded-2xl shadow-glow"
            />
            <div className="absolute -top-4 -right-4 bg-warning text-warning-foreground px-4 py-2 rounded-full font-bold text-lg animate-bounce">
              80% OFF
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;