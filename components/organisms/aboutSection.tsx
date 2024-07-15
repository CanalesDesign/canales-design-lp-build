"use client";
import Container from "@/atoms/container";
import dynamic from "next/dynamic";
import AboutContent from "@/data/about-data";
import Paragraphs from "@/atoms/paragraphs";
import Icon from "@/atoms/icon";
import Image from "next/image";
import CanalesPhoto from "@/assets/rodrigo-canales-designer.webp";

const NoSSR = dynamic(() => import("@/atoms/counter"), { ssr: false });

export default function AboutSection() {
  return (
    <section className="about-section pt-4 md:pt-0 pb-16 md:pb-24">
      <div className="image-wrapper flex justify-end">
        <Image
          className="md:w-4/6 md:pl-5"
          src={CanalesPhoto}
          alt="hero image"
          priority={true}
          sizes="(max-width: 600px) 600px, 364px"
        />
      </div>
      <Container className="flex justify-end">
        <div className="about-content-wrapper mt-10 md:mt-14 md:w-4/6 ">
          <NoSSR />
          {/* <Counter /> */}
          {AboutContent.map((item) => {
            return (
              <div className="about-content" key={item.id}>
                <Paragraphs
                  className="mt-6 lg:mt-8 md:w-[800px]"
                  body={item.body}
                  bodySize="body-xl"
                />
                <div className="icon-wrapper mt-6 flex items-center gap-2">
                  <a
                    className="block"
                    href="https://www.linkedin.com/in/rodcanales/"
                    target="_blank"
                    role="link">
                    <Icon
                      className="text-accent hover:text-accent-hove"
                      icon={item.linkedin}
                    />
                  </a>
                  <a
                    className="block"
                    href="https://canalesid.com.br"
                    target="_blank"
                    role="link">
                    <Icon
                      className="text-accent hover:text-accent-hove"
                      icon={item.portfolio}
                    />
                  </a>
                  <a
                    className="block"
                    href="https://api.whatsapp.com/send?phone=5541997532248"
                    target="_blank"
                    role="link">
                    <Icon
                      className="text-accent hover:text-accent-hover"
                      icon={item.whatsapp}
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
