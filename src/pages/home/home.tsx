import { useMediaQuery } from "../../hooks";
import { DesktopView } from "./desktop-view";
import { MobileView } from "./mobile-view";

export const Home = () => {
  const isLargeDevice = useMediaQuery("sm");

  return isLargeDevice ? <DesktopView /> : <MobileView />;
};
