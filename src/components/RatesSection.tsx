import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const RatesSection = () => {
  const [selectedBrand, setSelectedBrand] = useState("mastercard");

  const rates = {
    mastercard: {
      debit: { rate: "0,59%", promo: true, days: "1 dia útil" },
      credit: { rate: "0,59%", promo: true, days: "1 dia útil" },
      installment: { rate: "7,99%", promo: true, days: "30 dias" }
    },
    elo: {
      debit: { rate: "0,69%", promo: true, days: "1 dia útil" },
      credit: { rate: "0,69%", promo: true, days: "1 dia útil" },
      installment: { rate: "8,99%", promo: true, days: "30 dias" }
    }
  };

  const currentRates = rates[selectedBrand as keyof typeof rates];

  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center space-y-8 mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Conheça as taxas do Ton Brother
          </h2>
          
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              variant={selectedBrand === "mastercard" ? "cta" : "outline"}
              onClick={() => setSelectedBrand("mastercard")}
            >
              Mastercard e Visa
            </Button>
            <Button
              variant={selectedBrand === "elo" ? "cta" : "outline"}
              onClick={() => setSelectedBrand("elo")}
            >
              Elo, Amex e Hipercard
            </Button>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-card max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-bold text-foreground">DÉBITO</h3>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">
                  {currentRates.debit.rate}
                </div>
                {currentRates.debit.promo && (
                  <Badge className="bg-warning text-warning-foreground">
                    PROMO
                  </Badge>
                )}
                <div className="text-muted-foreground">
                  Receba em {currentRates.debit.days}
                </div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <h3 className="text-xl font-bold text-foreground">CRÉDITO À VISTA</h3>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">
                  {currentRates.credit.rate}
                </div>
                {currentRates.credit.promo && (
                  <Badge className="bg-warning text-warning-foreground">
                    PROMO
                  </Badge>
                )}
                <div className="text-muted-foreground">
                  Receba em {currentRates.credit.days}
                </div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <h3 className="text-xl font-bold text-foreground">CRÉDITO PARCELADO 12X</h3>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">
                  {currentRates.installment.rate}
                </div>
                {currentRates.installment.promo && (
                  <Badge className="bg-warning text-warning-foreground">
                    PROMO
                  </Badge>
                )}
                <div className="text-muted-foreground">
                  Receba em {currentRates.installment.days}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              *Taxa válida durante 30 dias ou até atingir R$ 5.000,00 em vendas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatesSection;