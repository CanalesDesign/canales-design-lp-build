import Container from "@/atoms/container";
import { IsotypeContent } from "@/data/isotype-data";
import IsotypeCard from "@/molecules/isotypeCard";
import Heading from "@/atoms/headings";
import Paragraphs from "@/atoms/paragraphs";
import InlineLink from "@/atoms/link";
import { ArrowDown } from "lucide-react";
import IsotypesCarousel from "@/molecules/isotypeCarousel";

export default function IsotypeSection() {
  return (
    <section className="isotype-section pt-24 md:pt-32 pb-24">
      <Container>
        <div className="mobile md:hidden">
          <Heading
            className="text-balance md:hidden mb-6"
            headingLevel="h2"
            levelSize="headline-1"
            headline="Fortaleça sua marca com símbolos memoráveis."
          />
          <Paragraphs
            className="mb-12"
            bodySize="body-xl"
            body="Logotipos com símbolos geométricos oferecem reconhecimento imediato e facilidade de memorização. São adaptáveis e garantem simplicidade e clareza em qualquer formato. Além disso, mantém coerência, qualidade visual em várias escalas e fortalecem a conexão com sua marca."
          />
          <IsotypesCarousel />
        </div>
        <div className="desktop-view hidden md:inline-block">
          {IsotypeContent.map((item) => {
            return (
              <div
                className="isotype-text-wrapper md:grid md:grid-cols-2 md:gap-12 md:items-start pb-12"
                key={item.id}>
                <Heading
                  className="text-balance hidden md:inline-block"
                  headingLevel="h2"
                  levelSize="headline-2"
                  headline={item.headline}
                />
                <Paragraphs bodySize="body-xl" body={item.body} />
              </div>
            );
          })}
          <IsotypeCard />
        </div>
        <div className="link__wrapper mt-12 flex justify-center md:justify-end text-accent hover:text-accent-hover">
          <InlineLink
            label="Faça dowload do Logofolio"
            iconRight={<ArrowDown />}
            path="https://drive.google.com/drive/folders/1wAUnFD9ZCfnGtJRLR3bzCR_piEtctcrQ?usp=sharing"
            target="_blank"
          />
        </div>
      </Container>
    </section>
  );
}
