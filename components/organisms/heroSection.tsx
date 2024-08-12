import Container from "@/atoms/container";
import HeroContent from "@/data/hero-content";
import Heading from "@/atoms/headings";
import Paragraphs from "@/atoms/paragraphs";
import Button from "@/atoms/button";
import { MessageSquareText } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero-section pt-2 pb-8 md:pt-4 md:pb-4">
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
                Identidade Visual
                <br />
                que transmite credibilidade,
                <br />
                confiança e fortalece
                <br /> sua empresa.
              </Heading>
              <Heading
                className="text-secondary hidden md:inline-block"
                headingLevel="h1"
                levelSize="display">
                Identidade Visual
                <br />
                que transmite confiança,
                <br />
                credibilidade e fortalece
                <br />
                sua empresa.
              </Heading>

              <Paragraphs
                className="text-secondary max-w-[860px] mt-6 text-balance paragraph-mono"
                bodySize="body-xl">
                Conecte-se com seu público e crie mais valor para sua empresa
                desenvolvendo uma Identidade Visual que vai{" "}
                <span className="highlight">
                  destacar você no mercado e promover crescimento.
                </span>
              </Paragraphs>
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
