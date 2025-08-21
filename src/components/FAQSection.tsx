import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Qual o prazo de entrega da minha maquininha?",
      answer: "Sua maquininha Ton é enviada em até 2 dias úteis após a aprovação do pedido, com frete grátis para todo o Brasil. O prazo de entrega varia de 3 a 10 dias úteis dependendo da sua região."
    },
    {
      question: "A garantia vitalícia é real?",
      answer: "Sim! Todas as maquininhas Ton têm garantia vitalícia contra defeitos de fabricação. Se sua maquininha apresentar algum problema, fazemos a troca gratuita."
    },
    {
      question: "Existe taxa de adesão?",
      answer: "Não cobramos nenhuma taxa de adesão. Você paga apenas pelo valor da maquininha e pronto - sem mensalidades, sem aluguel, sem surpresas."
    },
    {
      question: "O Pix realmente é grátis?",
      answer: "Sim! Todas as transações via Pix são 100% gratuitas na Ton, sem limite de quantidade ou valor. É uma das formas mais econômicas de receber pagamentos."
    },
    {
      question: "Preciso de celular para usar a maquininha?",
      answer: "Depende do modelo. A T1 e T2+ precisam estar conectadas ao celular via Bluetooth. Já a T3 e T3 Smart funcionam de forma independente, com chip 3G incluso."
    },
    {
      question: "Como funciona o recebimento dos valores?",
      answer: "Você recebe suas vendas em até 1 dia útil na sua conta Ton (gratuita) ou em qualquer banco de sua escolha. Débito e crédito à vista caem no próximo dia útil."
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Claro! Não temos fidelidade nem multa por cancelamento. Sua maquininha é sua para sempre, e você pode parar de usar quando quiser."
    },
    {
      question: "O suporte 24h funciona mesmo?",
      answer: "Sim! Nosso suporte funciona 24 horas por dia, 7 dias por semana, incluindo feriados. Você pode entrar em contato via telefone, WhatsApp ou chat no app."
    }
  ];

  return (
    <section className="py-16 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Dúvidas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire todas suas dúvidas sobre as maquininhas Ton
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card rounded-lg px-6 py-2 shadow-card"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;