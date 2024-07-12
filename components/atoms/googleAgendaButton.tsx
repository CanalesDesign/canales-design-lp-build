import { Calendar } from "lucide-react";
import Button from "./button";

export default function GoogleAgendaButton() {
  return (
    <Button
      intent="primary"
      label="Agendar uma Reunião"
      icon={<Calendar size={16} />}
      path="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3xY_x3OX0HXBRUwBQD19YoMpOEC_TtU4KvnR_P4_ZFlDmX8NJ6PTo6KCXXPhYRVujYRiaUnr-I?gv=true"
    />
  );
}
