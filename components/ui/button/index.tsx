import Link from "next/link";

import classes from "@/css/button.module.css";

export default function Button(props) {
  const { children, link } = props;

  if (link) {
    return (
      <Link className={classes.btn} href={link}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={props.onClick}>
      {children}
    </button>
  );
}
