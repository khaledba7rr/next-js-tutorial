import classes from "@/css/event-item.module.css";
import Button from "../ui/button";

import DateIcon from "@/components/ui/icons/date-icon";
import AddressIcon from "@/components/ui/icons/address-icon";
import ArrowRightIcon from "@/components/ui/icons/arrow-right-icon";

export default function EventItem({ event }) {
  const { title, date, id, location, image } = event;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const address = location.replace(",", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={image} alt={title} />

      <div className={classes.content}>
        <div className={classes.summary}>
          <h2> {title} </h2>
          <div className={classes.date}>
            <DateIcon />
            <time> {humanReadableDate} </time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address> {address} </address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}> Explore Event </Button>
          <span className={classes.icon}>
            <ArrowRightIcon />
          </span>
        </div>
      </div>
    </li>
  );
}
