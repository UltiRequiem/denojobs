/** @jsx h */
import { h, useEffect, useState } from "../client_deps.ts";

const timeFmt = new Intl.RelativeTimeFormat("en-US");

export default function Countdown(props: { target: string }) {
  const target = new Date(props.target);

  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());

      if (now > target) {
        clearInterval(timer);
      }

    }, 1000);

    return () => clearInterval(timer);
  }, [props.target]);

  if (now > target) {
    return <span>🎉</span>;
  }

  const secondsLeft = Math.floor((target.getTime() - now.getTime()) / 1000);

  return <span>{timeFmt.format(secondsLeft, "seconds")}</span>;
}
