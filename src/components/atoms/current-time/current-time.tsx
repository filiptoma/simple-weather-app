import { useEffect, useState } from "react";

import { useMediaQuery } from "../../../hooks";
import { FMT_HUMAN, FMT_HUMAN_COMPACT, cn, formatDate } from "../../../utils";

export type CurrentTimeProps = {
  className?: string;
};

export const CurrentTime = ({ className }: CurrentTimeProps) => {
  const isLargeDevice = useMediaQuery("sm");

  const fmt = isLargeDevice ? FMT_HUMAN : FMT_HUMAN_COMPACT;

  const [time, setTime] = useState<string>(formatDate(new Date(), fmt));

  useEffect(() => {
    const updateTime = () => setTime(formatDate(new Date(), fmt));

    const msUntilNextMinute = 60000 - new Date().getSeconds() * 1000;
    const timeout = setTimeout(() => {
      updateTime();
      setInterval(updateTime, 60000);
    }, msUntilNextMinute);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span className={cn("text-sm text-secondary-500 sm:text-base", className)}>
      {time}
    </span>
  );
};
