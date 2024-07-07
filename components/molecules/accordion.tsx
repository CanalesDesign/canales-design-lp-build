"use client";
import { useState } from "react";
import Heading from "@/atoms/headings";
import Paragraphs from "@/atoms/paragraphs";
import Button from "@/atoms/button";
import { ChevronDown } from "lucide-react";
import { ChevronUp } from "lucide-react";

export default function Accordion(props: any) {
  const [show, setShow] = useState(false);
  return (
    <article className="article">
      <div className="article-wrapper bg-primary-subtle rounded-xl shadow-xl shadow-secondary-subtle/10 h-full hover:scale-105 hover:shadow-2xl transition-all ease-in-out duration-100">
        <Button
          className="bg-primary-subtle hover:translate-y-0 hover:bg-primary-subtle justify-between rounded-xl py-6 px-6 mt-0"
          fullWidth={true}
          onClick={() => setShow(!show)}
          type="button">
          <Heading
            className="normal-case tracking-normal text-secondary text-left"
            levelSize="headline-5"
            headingLevel="h3"
            headline={props.question}
          />
          <span className="text-accent hover:text-accent-hover">
            {show ? <ChevronUp /> : <ChevronDown />}
          </span>
        </Button>

        <div
          className={`article__answer grid overflow-hidden transition-all ease-in-out duration-500 ${show ? `grid-rows-[1fr] opacity-100 pb-8` : `grid-rows-[0fr] opacity-0 pb-0`}`}>
          <Paragraphs
            className="bg-primary-subtle px-6 rounded-xl overflow-hidden"
            bodySize="body-base"
            body={props.answer}
          />
        </div>
      </div>
    </article>
  );
}
