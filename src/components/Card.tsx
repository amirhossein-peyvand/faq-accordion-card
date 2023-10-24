import { useMediaQuery } from "react-responsive";
import DesktopCard from "./DesktopCard";
import MobileCard from "./MobileCard";

const Card = () => {
  const isGreaterThan830px = useMediaQuery({
    query: "(min-width: 830px)",
  });

  return <>{isGreaterThan830px ? <DesktopCard /> : <MobileCard />}</>;
};

export default Card;
