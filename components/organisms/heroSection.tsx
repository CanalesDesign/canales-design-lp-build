import Container from "@/atoms/container";
import HeroContent from "@/data/hero-content";
import Heading from "@/atoms/headings";
import Paragraphs from "@/atoms/paragraphs";
import Button from "@/atoms/button";
import { MessageSquareText } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero-section pt-4 pb-8 md:pt-20 md:pb-16">
      <Container>
        {HeroContent.map((item) => {
          return (
            <div
              className="hero-content-wrapper md:max-w-[954px] md:ml-[110px]"
              key={item.id}>
              <Heading
                className="text-secondary"
                headingLevel="h1"
                levelSize="display">
                Identidade Visual <br className="hidden md:inline" /> que
                transforma empresas.
              </Heading>
              <Paragraphs
                className="text-secondary max-w-[860px] mt-6"
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
