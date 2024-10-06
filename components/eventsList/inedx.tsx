import EventItem from "../eventItem/inedx";

import classes from "@/css/event-list.module.css";

export default function EventsList({ events }) {

    if(events.length == 0){

        return <p> There're no events coming..</p>
    }

  return events.map((event) => (
    <ul className={classes.list}>
      <EventItem key={event.id} event={event} />
    </ul>
  ));
}
