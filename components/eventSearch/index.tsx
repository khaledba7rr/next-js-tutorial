import { LegacyRef, useRef } from "react";
import Button from "../ui/button";
import classes from "@/css/events-search.module.css";
import { useRouter } from "next/router";

export default function EventFilter() {
  const router = useRouter();

  const yearInputRef = useRef<HTMLSelectElement>();
  const monthInputRef = useRef<HTMLSelectElement>();

  function onFilterSubmit(event) {
    event.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    router.push(`/events/${selectedYear}/${selectedMonth}`);
  }

  return (
    <form className={classes.form} onSubmit={onFilterSubmit}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year"> Year </label>
          <select id="year" ref={yearInputRef}>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            <option value="1">January</option>
            <option value="2">Febraury</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button> Filter </Button>
    </form>
  );
}
