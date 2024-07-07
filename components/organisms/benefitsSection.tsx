import { BenefitsContent, BenefitsCards } from "@/data/benefits-data";
import Container from "@/atoms/container";
import Heading from "@/atoms/headings";
import Overline from "@/atoms/overline";
import Paragraphs from "@/atoms/paragraphs";
import Card from "@/molecules/cards";
import { MessageSquareText } from "lucide-react";
import Button from "@/atoms/button";

export default function BenefitsSection() {
  return (
    <section className="benefits__section bg-primary-300">
      <Container className="py-0 md:py-10">
        <div className="benefits__section--container section__wrapper lg:flex">
          <div className="benefits__intro md:w-2/6">
            {BenefitsContent.map((item) => {
              return (
                <div className="benefits_intro--content lg:pr-6" key={item.id}>
                  <Overline
                    className="text-secondary-lighter"
                    text={item.overline}
                  />
                  <Heading
                    headingLevel="h2"
                    levelSize="headline-1"
                    className="md:hidden  text-secondary text-pretty"
                    headline={item.headline}
                  />
                  <Heading
                    headingLevel="h2"
                    levelSize="headline-2"
                    headline={item.headline}
                    className="hidden md:inline-block text-secondary"
                  />
                  <Paragraphs
                    bodySize="body-xl"
                    body={item.body}
                    className="text-secondary mt-6 lg:mt-8 mb-6 lg:mb-0 text-balance"
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
          </div>
          <div className="benefits__cards--wrapper mt-14 md:mt-0 md:w-4/6 lg:grid lg:grid-cols-2 flex flex-col gap-6 lg:gap-6">
            {BenefitsCards.map(({ id, icon, subtitle, body }) => {
              return (
                <div className="benefits__card" key={id}>
                  <Card icon={icon} subtitle={subtitle} body={body} />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
