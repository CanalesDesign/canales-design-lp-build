import Container from "@/atoms/container";
import HeroContent from "@/data/hero-content";
import Heading from "@/atoms/headings";
import Paragraphs from "@/atoms/paragraphs";
import Button from "@/atoms/button";
import { MessageSquareText } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero-section pt-2 pb-8 md:pt-4 md:pb-0">
      <Container>
        {HeroContent.map((item) => {
          return (
            <div
              className="hero-content-wrapper md:max-w-[954px] md:ml-[110px]"
              key={item.id}>
              <Heading
                className="text-secondary md:hidden"
                headingLevel="h1"
                levelSize="display">
                Fortaleça
                <br />a percepção
                <br />
                da sua empresa com uma Identidade Visual que transmite confiança
                <br />e credibilidade.
              </Heading>
              <Heading
                className="text-secondary hidden md:inline-block"
                headingLevel="h1"
                levelSize="display">
                Fortaleça a percepção
                <br />
                da sua empresa
                <br />
                com uma Identidade Visual
                <br />
                que transmite confiança
                <br />e credibilidade.
              </Heading>
              <Paragraphs
                className="text-secondary max-w-[860px] mt-4"
                bodySize="body-xl"
                body={item.body}
              />

              <Button
                intent="primary"
                label={item.cta}
                icon={<MessageSquareText size={16} />}
                path={item.path}
                target={item.target}
                rel={item.rel}
              />
            </div>
          );
        })}
      </Container>
    </section>
  );
}
