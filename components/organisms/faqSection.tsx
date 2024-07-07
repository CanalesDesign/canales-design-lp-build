import { FaqIntro, FaqQuestions } from "@/data/faq-data";
import Container from "@/atoms/container";
import Accordion from "@/molecules/accordion";
import Heading from "@/atoms/headings";
import Overline from "@/atoms/overline";
import Paragraphs from "@/atoms/paragraphs";
import Button from "@/atoms/button";
import { MessageSquareText } from "lucide-react";

export default function FaqSection() {
  return (
    <section className="faq-section py-24">
      <Container>
        <div className="faq-section-wrapper md:grid md:grid-cols-2 md:gap-12">
          <div className="faq-section-intro mb-12 md:mb-0">
            {FaqIntro.map((item) => {
              return (
                <div className="faq-section-headline" key={item.id}>
                  <Overline
                    className="text-secondary-lighter"
                    text={item.overline}
                  />
                  <Heading
                    className="text-secondary md:hidden"
                    headingLevel="h2"
                    levelSize="headline-1"
                    headline={item.headline}
                  />
                  <Heading
                    className="text-secondary hidden md:inline-block"
                    headingLevel="h2"
                    levelSize="headline-2"
                    headline={item.headline}
                  />
                  <Paragraphs
                    className="mt-6 lg:mt-8"
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
                    className="hidden md:flex"
                  />
                </div>
              );
            })}
          </div>
          <div className="faq-section-accordion">
            {FaqQuestions.map((item) => {
              return (
                <div
                  className="faq-accordion-wrapper pb-6 md:pb-0"
                  key={item.id}>
                  <Accordion question={item.question} answer={item.answer} />
                </div>
              );
            })}
          </div>
        </div>
        <Button
          intent="primary"
          label="converse comigo"
          icon={<MessageSquareText size={16} />}
          path="https://api.whatsapp.com/send?phone=5541997532248"
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden"
        />
      </Container>
    </section>
  );
}
