import Link from "next/link";

import classes from "@/css/main-header.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/"> NextEvents </Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <Link href="/events"> Events </Link>
        </ul>
      </nav>
    </header>
  );
}
