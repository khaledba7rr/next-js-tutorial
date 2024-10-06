import EventFilter from "@/components/eventSearch";
import EventsList from "@/components/eventsList/inedx";
import { getAllEvents } from "@/dummy-data";

export default function EventsPage() {
  const allEvents = getAllEvents();

  return (
    <>
      <div>
        <EventFilter />
        <EventsList events={allEvents} />
      </div>
    </>
  );
}
