import { Button } from "@/components/ui/button";

const DigitalAccountSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Conta digital grátis pra receber e movimentar a grana das suas vendas
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Com a conta digital Ton, você recebe o dinheiro das suas vendas direto na conta, sem complicação e sem taxa.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Transferências ilimitadas e gratuitas</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Cartão de débito sem anuidade</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Saques gratuitos na rede 24 Horas</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Pix grátis e ilimitado</span>
                </div>
              </div>
            </div>
            <Button variant="cta" size="lg" className="text-lg px-8 py-6">
              Veja as taxas
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 text-center shadow-card">
              <div className="bg-white rounded-xl p-6 shadow-lg mx-auto max-w-sm">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-full mx-auto flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-xl">T</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Conta Ton</h3>
                    <p className="text-muted-foreground">100% digital e gratuita</p>
                  </div>
                  <div className="text-3xl font-bold text-primary">R$ 2.450,00</div>
                  <p className="text-sm text-muted-foreground">Saldo disponível</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-muted-foreground">
                  💳 Controle total pelo app
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalAccountSection;