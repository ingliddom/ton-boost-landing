import ProductCard from "./ProductCard";
import machineT1 from "@/assets/machine-t1.jpg";
import machineT2 from "@/assets/machine-t2.jpg";
import machineT3 from "@/assets/machine-t3.jpg";
import machineT3Smart from "@/assets/machine-t3-smart.jpg";

const ProductSection = () => {
  const products = [
    {
      name: "T1",
      model: "T1 Ton",
      image: machineT1,
      originalPrice: "398,00",
      promoPrice: "79,60",
      installments: "12x R$ 6,63",
      discount: "80",
      features: [
        "Frete e troca grátis",
        "Receba suas vendas em 1 dia útil",
        "Receba por aproximação",
        "Garantia vitalícia",
        "Suporte 24h"
      ],
      icons: ["card", "wifi"]
    },
    {
      name: "T2+",
      model: "T2+ Ton",
      image: machineT2,
      originalPrice: "498,00",
      promoPrice: "99,60",
      installments: "12x R$ 8,30",
      discount: "80",
      features: [
        "Frete e troca grátis", 
        "Receba suas vendas em 1 dia útil",
        "Receba por aproximação",
        "Tela para facilitar vendas",
        "Garantia vitalícia",
        "Suporte 24h"
      ],
      icons: ["card", "wifi", "smartphone"]
    },
    {
      name: "T3", 
      model: "T3 Ton",
      image: machineT3,
      originalPrice: "698,00",
      promoPrice: "139,60",
      installments: "12x R$ 11,63",
      discount: "80",
      features: [
        "Frete e troca grátis",
        "Receba suas vendas em 1 dia útil", 
        "Receba por aproximação",
        "Imprime comprovante",
        "Bateria que dura o dia todo",
        "Garantia vitalícia",
        "Suporte 24h"
      ],
      icons: ["card", "wifi", "printer", "battery"]
    },
    {
      name: "T3 Smart",
      model: "T3 Smart Ton Max",
      image: machineT3Smart,
      originalPrice: "998,00",
      promoPrice: "199,60",
      installments: "12x R$ 16,63",
      discount: "80",
      features: [
        "Frete e troca grátis",
        "Receba suas vendas em 1 dia útil",
        "Receba por aproximação", 
        "Imprime comprovante",
        "Bateria que dura o dia todo",
        "Venda por QR Code",
        "Não precisa de celular",
        "Garantia vitalícia",
        "Suporte 24h"
      ],
      icons: ["card", "wifi", "printer", "battery", "smartphone"]
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Escolha sua Ton
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            As maquininhas Ton não têm aluguel e nem mensalidades e contam com <strong>garantia vitalícia</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;