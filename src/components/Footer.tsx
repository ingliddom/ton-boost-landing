import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Ton</h3>
            <p className="text-primary-foreground/80">
              A maquininha que não tem aluguel e as melhores taxas do Brasil.
            </p>
            <div className="flex gap-4">
              <Button variant="whatsapp" size="sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Produtos</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Maquininha T1</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Maquininha T2+</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Maquininha T3</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Maquininha T3 Smart</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Conta Digital</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Atendimento</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-primary-foreground/80">0800 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span className="text-primary-foreground/80">(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-primary-foreground/80">contato@ton.com.br</span>
              </div>
              <p className="text-sm text-primary-foreground/60">
                Atendimento 24h, todos os dias
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Institucional</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Sobre a Ton</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Termos e Condições</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Ton. Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              CNPJ: 00.000.000/0001-00 | Licença Banco Central: 000000
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;