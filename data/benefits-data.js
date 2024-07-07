import { BarChart4 } from "lucide-react";
import { Eye } from "lucide-react";
import { Gem } from "lucide-react";
import { Heart } from "lucide-react";

const BenefitsContent = [
  {
    id: 1,
    overline: "benefícios",
    headline: "Como uma Identidade Visual pode impulsionar sua empresa.",
    body: "Uma identidade visual profissional transforma a percepção do cliente, aumenta a credibilidade e impulsiona o crescimento da sua empresa. Veja como nosso design pode impactar sua marca.",
    path: "https://api.whatsapp.com/send?phone=5541997532248",
    rel: "noopener noreferrer",
    target: "_blank",
    cta: "fale comigo agora"
  },
];

const BenefitsCards = [
  {
    id: 1,
    icon: <BarChart4 size={40} />,
    alt: "Crescimento Icone",
    subtitle: "Base para o crescimento.",
    body: "Uma Identidade Visual é a base para crescer mais e de maneira consistente.",
  },
  {
    id: 2,
    icon: <Eye size={40} />,
    alt: "Impacto Icone",
    subtitle: "Impacto duradouro.",
    body: "Consolide-se com uma memória de marca forte e reconhecível.",
  },
  {
    id: 3,
    icon: <Gem size={40} />,
    alt: "Diferenciação Icone",
    subtitle: "Diferenciação única.",
    body: "Seja inesquecível e construa uma presença profissional no mercado.",
  },
  {
    id: 4,
    icon: <Heart size={40} />,
    alt: "Engajamento Icone",
    subtitle: "Engajamento eficaz.",
    body: "Conquiste fidelidade fazendo da sua marca uma experiência única.",
  },
];

export { BenefitsContent, BenefitsCards };