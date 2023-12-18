import "./FAQ.css";
import iconMinus from "../assets/icon-minus.svg";
import iconPlus from "../assets/icon-plus.svg";
import { useState, useEffect, forwardRef } from "react";

const FAQ = forwardRef(function FAQ({ question }, ref) {
  const [click, setClick] = useState(false);

  useEffect(() => {
    if (ref && ref.current) {
      ref.current = click ? null : ref.current;
    }
  }, [click, ref]);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="boxCard">
      <section className="FAQbox">
        <img
          onClick={handleClick}
          src={click ? iconMinus : iconPlus}
          className="buttonCard"
        />
        <p className="titleCard" onClick={handleClick}>
          {question}
        </p>
      </section>

      <p className="FAQContent" style={{ display: click ? "block" : "none" }}>
        Frontend Mentor offer realistic codign challenges to help developers
        improvise their frontend codign skills with projects in HTML, CSS, and
        JavaScript. It's suitable for all levels and ideal for portfolio
        buildign.
      </p>
    </div>
  );
});

export default FAQ;
