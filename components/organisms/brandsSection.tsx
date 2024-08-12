import Container from "@/atoms/container";
import Heading from "@/atoms/headings";
import Paragraphs from "@/atoms/paragraphs";
import { BrandsIntro, BrandsLogos } from "@/data/brands-data";
import Image from "next/image";

export default function BrandsSection() {
  return (
    <section className="brands__section">
      <Container className="md:py-16">
        <div className="brands__section--wrapper section__wrapper">
          {BrandsIntro.map(({ id, headline, body }) => {
            return (
              <div className="brands__section--intro md:w-5/6" key={id}>
                <div className="overline-headline items-start">
                  <Heading
                    headingLevel="h2"
                    levelSize="headline-1"
                    headline={headline}
                    className="md:hidden text-balance"
                  />
                  <Heading
                    headingLevel="h2"
                    levelSize="headline-2"
                    headline={headline}
                    className="text-balance hidden md:inline-block"
                  />
                  <Paragraphs
                    bodySize="body-xl"
                    className="mt-6 lg:mt-8 md:w-5/6 paragraph-mono text-balance">
                    Com 33 anos de jornada, colaboramos com empresas renomadas
                    em diversos setores, proporcionando soluções práticas e
                    relevantes{" "}
                    <span className="highlight">
                      que podem ser adaptadas para negócios de todos os tamanhos
                    </span>
                  </Paragraphs>
                </div>
              </div>
            );
          })}
          <div className="brands__logos--wrapper grid grid-cols-2 md:flex md:gap-3 mt-12 border-t-[0.5px] border-b-[0.5px] border-secondary-lighter/50">
            {BrandsLogos.map(({ id, customer, alt }) => {
              return (
                <div className="brands__logos" key={id}>
                  <Image src={customer} alt={alt} />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
