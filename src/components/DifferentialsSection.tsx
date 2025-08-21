import { Shield, Clock, DollarSign, Headphones, Truck, Zap } from "lucide-react";

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: Shield,
      title: "Troca grátis e garantia vitalícia",
      description: "Sua maquininha com garantia para sempre, sem preocupações"
    },
    {
      icon: DollarSign,
      title: "Aqui sua maquininha não tem aluguel",
      description: "Pague uma vez e use para sempre, sem mensalidades"
    },
    {
      icon: Zap,
      title: "As melhores taxas do mercado",
      description: "A partir de 0,59% e Pix sem taxa para seu negócio crescer"
    },
    {
      icon: Headphones,
      title: "Suporte 24h",
      description: "Atendimento especializado todos os dias, a qualquer hora"
    },
    {
      icon: Truck,
      title: "Frete grátis para todo Brasil",
      description: "Receba sua maquininha em casa sem pagar nada pelo frete"
    },
    {
      icon: Clock,
      title: "Receba no mesmo dia",
      description: "Suas vendas caem na conta em até 1 dia útil"
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Por que o Ton é diferente?
          </h2>
          <p className="text-xl text-muted-foreground">
            Mais do que uma maquininha, uma solução completa para seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="text-center space-y-4 p-6 rounded-xl hover:bg-secondary/20 transition-colors">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;