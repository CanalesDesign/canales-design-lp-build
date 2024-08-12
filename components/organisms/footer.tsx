import { FooterContent, NextContent } from "@/data/footer-data";
import Container from "@/atoms/container";
import Heading from "@/atoms/headings";
import Paragraphs from "@/atoms/paragraphs";
import Icon from "@/atoms/icon";
import Image from "next/image";
import Overline from "@/atoms/overline";

export default function Footer() {
  return (
    <footer className="footer__section">
      <Container>
        <div className="footer__section--wrapper md:flex md:justify-between md:items-end border-t-[0.5px] border-secondary-lighter/50 pt-16 pb-8 md:pt-24 md:pb-24">
          {FooterContent.map((item) => {
            return (
              <div className="footer__section--content" key={item.id}>
                <div className="content-wrapper flex flex-col md:flex-row gap-9 md:items-center">
                  <Image className="md:w-1/6" src={item.photo} alt={item.alt} />
                  <div className="text-wrapper md:w-3/6">
                    <Heading
                      className="text-secondary mb-4 text-balance"
                      headingLevel="h4"
                      levelSize="headline-4"
                      headline={item.headline}
                    />
                    <Paragraphs
                      bodySize="body-base"
                      className="text-balance paragraph-mono">
                      Rodrigo Canales, designer multidisciplinar, desenvolve
                      Identidades Visuais autênticas e marcantes{" "}
                      <span className="highlight">
                        centradas na essência e nos valores da sua empresa.
                      </span>
                    </Paragraphs>
                    <div className="icon-wrapper mt-6 flex items-center gap-2">
                      <a
                        className="block"
                        href={item.linkedinpath}
                        target="_blank"
                        role="link">
                        <Icon
                          className="text-accent hover:text-accent-hove"
                          icon={item.linkedin}
                        />
                      </a>
                      <a
                        className="block"
                        href={item.portfoliopath}
                        target="_blank"
                        role="link">
                        <Icon
                          className="text-accent hover:text-accent-hove"
                          icon={item.portfolio}
                        />
                      </a>
                      <a
                        className="block"
                        href={item.whatsapppath}
                        target="_blank"
                        role="link">
                        <Icon
                          className="text-accent hover:text-accent-hover"
                          icon={item.whatsapp}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {NextContent.map((item) => {
            return (
              <div
                className="develop-wrapper flex flex-col mt-24 md:mt-0"
                key={item.id}>
                <Overline
                  className="font-normal text-xsmall tracking-normal mb-2"
                  text={item.overline}
                />
                <Image
                  className="md:hidden"
                  src={item.logo}
                  alt={item.alt}
                  width={110}
                />
                <Image
                  className="hidden md:inline-block"
                  src={item.logo}
                  alt={item.alt}
                  width={150}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </footer>
  );
}
