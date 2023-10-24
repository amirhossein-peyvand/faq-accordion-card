import { useState } from "react";
import arrowDown from "../assets/icon-arrow-down.svg";
import "../sass/Accordion.scss";

interface Props {
  header: string;
  text: string;
}

const Accordion = ({ header, text }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion">
      <div className="header" onClick={() => setOpen(!open)}>
        <p className={`title ${open && "larger"}`}>{header}</p>
        <img
          className={`${open && "arrowDown"}`}
          src={arrowDown}
          alt="arrowDown"
        />
      </div>
      <p className="text">{open && text}</p>
    </div>
  );
};

export default Accordion;
