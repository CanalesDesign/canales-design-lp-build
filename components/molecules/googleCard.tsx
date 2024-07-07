import Image from "next/image";
import RatingStar from "@/atoms/ratingStar";
import Heading from "@/atoms/headings";
import Paragraphs from "@/atoms/paragraphs";

export default function GoogleCard(props: any) {
  return (
    <article className="google__card bg-primary-subtle rounded-3xl px-6 py-10 lg:px-8 lg:py-12 mb-6 last:mb-0 lg:mb-0 shadow-xl shadow-secondary-subtle/10 hover:scale-105 hover:shadow-2xl transition-all ease-in-out duration-300 h-full ">
      <div className="google__card--wrapper">
        <div className="google__card--header flex justify-between">
          <div className="profile flex items-center gap-3 mb-4">
            <Image
              className="w-10 h-10"
              src={props.img}
              alt={props.alt}
              width={40}
              height={40}
            />
            <Heading
              headingLevel="h3"
              levelSize="headline-6"
              headline={props.name}
              className="text-secondary-500"
            />
          </div>
          <Image
            className="w-4 h-4"
            src={props.logo}
            alt={props.alt}
            width={16}
            height={16}
          />
        </div>
        <div className="stars flex gap-1">
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
        </div>
        <Paragraphs
          bodySize="body-base"
          body={props.testimonial}
          className="text-secondary-600 mt-2 text-pretty"
        />
      </div>
    </article>
  );
}
