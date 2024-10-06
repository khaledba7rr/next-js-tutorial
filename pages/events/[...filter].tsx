import EventsList from "@/components/eventsList/inedx";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";

export default function EventFilterPage() {
  const router = useRouter();

  const filters = router.query.filter;

  if (!filters) {
    return <p> Loading ....</p>;
  }

  const [year, month] = filters;

  const filteredEvents = getFilteredEvents({ year : +year, month : +month });

  if (filteredEvents.length == 0) {
    return <p> No events matches those filters !</p>;
  }

  return (
    <div>
      <EventsList events={filteredEvents} />
    </div>
  );
}
