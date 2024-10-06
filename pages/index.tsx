import EventsList from "@/components/eventsList/inedx";
import Layout from "@/components/header/layout";
import { getFeaturedEvents } from "@/dummy-data";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventsList events={featuredEvents} />
    </div>
  );
}
