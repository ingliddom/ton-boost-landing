import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Smartphone, Wifi, CreditCard, Printer, Battery } from "lucide-react";

interface ProductCardProps {
  name: string;
  model: string;
  image: string;
  originalPrice: string;
  promoPrice: string;
  installments: string;
  discount: string;
  features: string[];
  icons: string[];
}

const ProductCard = ({ 
  name, 
  model, 
  image, 
  originalPrice, 
  promoPrice, 
  installments, 
  discount, 
  features,
  icons 
}: ProductCardProps) => {
  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      smartphone: Smartphone,
      wifi: Wifi,
      card: CreditCard,
      printer: Printer,
      battery: Battery
    };
    const Icon = iconMap[iconName] || Check;
    return <Icon className="w-5 h-5" />;
  };

  return (
    <div className="product-card relative">
      <Badge className="absolute -top-2 -right-2 bg-warning text-warning-foreground font-bold text-sm z-10">
        {discount}% DE DESCONTO
      </Badge>
      
      <div className="text-center space-y-4">
        <img 
          src={image} 
          alt={`${name} - Maquininha de cartão`}
          className="w-full h-48 object-contain mx-auto"
        />
        
        <div className="flex justify-center gap-2 flex-wrap">
          {icons.map((icon, index) => (
            <div key={index} className="bg-secondary p-2 rounded-full">
              {getIcon(icon)}
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-bold text-foreground">{name}</h3>
          <p className="text-muted-foreground">{model}</p>
        </div>

        <div className="space-y-2">
          <div className="text-muted-foreground line-through text-lg">
            R$ {originalPrice}
          </div>
          <div className="text-3xl font-bold text-primary">
            R$ {promoPrice}
          </div>
          <div className="text-muted-foreground">
            ou {installments}
          </div>
        </div>

        <div className="space-y-3">
          <Button variant="cta" className="w-full text-lg py-3">
            Quero a {model}!
          </Button>
          <Button variant="whatsapp" className="w-full">
            Pedir pelo WhatsApp
          </Button>
        </div>

        <div className="space-y-2 text-sm text-left">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;