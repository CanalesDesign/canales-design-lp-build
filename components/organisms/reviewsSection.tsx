import GoogleCard from "@/molecules/googleCard";
import { ReviewsIntro, Reviews } from "@/data/reviews-data";
import Heading from "@/components/atoms/headings";
import Container from "@/components/atoms/container";
import { ArrowUpRight } from "lucide-react";
import InlineLink from "@/atoms/link";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="reviews__section">
      <Container className="md:pt-24 pb-16 md:pb-24">
        <div className="reviews__section--container section__wrapper">
          {ReviewsIntro.map((item) => {
            return (
              <div
                className="reviews__intro text-center flex flex-col items-center"
                key={item.id}>
                <Heading
                  headingLevel="h2"
                  levelSize="headline-1"
                  headline={item.headline}
                  className="text-secondary max-w-[700px] md:text-pretty text-balance md:hidden"
                />{" "}
                <Heading
                  headingLevel="h2"
                  levelSize="headline-2"
                  headline={item.headline}
                  className="text-secondary max-w-[700px] text-balance hidden md:inline-block"
                />
              </div>
            );
          })}

          <div className="google-cards-wrapper flex flex-col gap-6 md:grid md:gap-6 mt-12 md:mt-16">
            {Reviews.map(({ id, img, alt, name, logo, testimonial }) => {
              return (
                <div className="google__cards" key={id}>
                  <GoogleCard
                    img={img}
                    alt={alt}
                    name={name}
                    logo={logo}
                    testimonial={testimonial}
                  />
                </div>
              );
            })}
          </div>
          <div className="link__wrapper mt-12 flex justify-center md:justify-end text-accent hover:text-accent-hover">
            <InlineLink
              label="Veja todas as avaliações"
              iconRight={<ArrowUpRight />}
              path="https://www.google.com/search?q=canales+design&oq=canales+design&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIICAEQABgWGB4yCggCEAAYgAQYogQyBggDEEUYOzIGCAQQRRg90gEIMjEwN2owajeoAgiwAgE&sourceid=chrome&ie=UTF-8"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
