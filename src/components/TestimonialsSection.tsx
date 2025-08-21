import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      business: "Padaria do Bairro",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612c8e6?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "A Ton mudou meu negócio! As taxas são realmente as melhores e o suporte é incrível. Recomendo para todos os comerciantes."
    },
    {
      name: "João Santos", 
      business: "Oficina São João",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Sem aluguel, taxas baixas e ainda recebo no mesmo dia. A maquininha T3 Smart é perfeita para minha oficina!"
    },
    {
      name: "Ana Costa",
      business: "Boutique Elegante", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "O QR Code da T3 Smart facilitou muito as vendas. Meus clientes adoram a praticidade e eu adoro as taxas!"
    },
    {
      name: "Carlos Oliveira",
      business: "Restaurante Sabor Caseiro",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", 
      rating: 5,
      text: "Suporte 24h salvou meu negócio várias vezes. A Ton é mais que uma maquininha, é uma parceira de negócios!"
    }
  ];

  return (
    <section className="py-16 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Descubra porquê nossos clientes amam o Ton
          </h2>
          <p className="text-xl text-muted-foreground">
            Mais de 500.000 empreendedores já escolheram a Ton
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="product-card">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                  ))}
                </div>
                
                <p className="text-muted-foreground italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;