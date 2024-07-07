import React, { useEffect, useState } from "react";
import moment from "moment";
import Heading from "@/atoms/headings";

const targetTime = moment("1991-01-07");

export default function Counter() {
  const [currentTime, setCurrentTime] = useState(moment());
  const timeBetween = moment.duration(currentTime.diff(targetTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Heading
      className="heading-counter text-secondary font-semibold"
      headingLevel="h2"
      levelSize="headline-2">
      Tempo de profissão: <br />
      <span className="mr-2 inline-block">{timeBetween.years()} anos,</span>
      <span className="mr-2 inline-block">{timeBetween.months()} meses,</span>
      <span className="mr-2">{timeBetween.days()} dias,</span><br />
      <span className="mr-2 inline-block">{timeBetween.hours()}h</span>
      <span className="mr-2 inline-block">{timeBetween.minutes()}min</span>
      <span>{timeBetween.seconds()}s</span>
    </Heading>
  );
}
