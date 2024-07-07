import Heading from "@/atoms/headings";
import Paragraphs from "@/atoms/paragraphs";

export default function Card(props: any) {
  return (
    <article className="card bg-primary-subtle rounded-3xl px-6 py-8 lg:px-8 lg:py-12 mb-6 last:mb-0 lg:mb-0 shadow-xl shadow-secondary-subtle/10 h-full hover:scale-105 hover:shadow-2xl transition-all ease-in-out duration-300">
      <div className="card__wrapper">
        <span className="text-xl">{props.icon}</span>
        <Heading
          headingLevel="h3"
          levelSize="headline-3"
          headline={props.subtitle}
          className="heading__3 mt-4 md:mt-6 mb-2"
        />
        <Paragraphs bodySize="body-lg" body={props.body} />
      </div>
    </article>
  );
}
