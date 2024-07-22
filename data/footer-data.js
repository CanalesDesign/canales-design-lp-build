import { Linkedin } from "lucide-react";
import { Folder } from "lucide-react";
import { Send } from "lucide-react";
import NextLogo from '@/assets/nextjs-logo.svg';
import { MessageSquareText } from "lucide-react";
import RodrigoCanalesDesigner from '@/assets/rodrigo-canales-designer-multidisciplinar.webp'

const FooterContent = [
  {
    id: 1,
    photo: RodrigoCanalesDesigner,
    alt: 'Rodrigo Canales Designer',
    headline: 'Canales Design, 33 anos de experiência para impulsionar sua empresa.',
    body: 'Rodrigo Canales, designer multidisciplinar, desenvolve identidades visuais autênticas e marcantes centradas na essência e nos valores da sua empresa.',
    linkedin: <Linkedin size={24} />,
    linkedinpath: "https://www.linkedin.com/in/rodcanales/",
    portfolio: <Folder size={24} />,
    portfoliopath: "https://canalesid.com.br/",
    email: <Send size={24} />,
    emailpath: "mailto:rodrigo@canalesdesign.com.br",
    whatsapp:<MessageSquareText size={24} />,
    whatsapppath: "https://api.whatsapp.com/send?phone=5541997532248",
    target: "_blank"
  },
];

const NextContent = [
  {
    id: 1,
    overline: 'Desenvolvido com',
    logo: NextLogo,
    alt: 'Next JS Logo',
  },
];

export { FooterContent, NextContent };
