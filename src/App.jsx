import "./App.css";
import iconStart from "./assets/icon-star.svg";
import FAQ from "./components/FAQ";
import { useState, useEffect, useRef } from "react";

function App() {
  const [totalHeight, setTotalHeight] = useState(0);
  const FAQs = useRef([]);

  useEffect(() => {
    let height = 0;
    FAQs.current.forEach((faqRef) => {
      if (faqRef && faqRef.current) {
        height += faqRef.current.offsetHeight; //Suma la altura del elemento(FAQContent) actual
      }
    });
    setTotalHeight(height);
  }, [FAQs]);

  return (
    <main className="Mainbg" style={{ height: totalHeight }}>
      <div className="MainContent">
        <section className="boxFAQ">
          <figure className="boxImage">
            <img
              src={iconStart}
              alt="iconStar"
              title="iconStart"
              className="iconStart"
            />
          </figure>
          <h1>FAQs</h1>
        </section>
        <section>
          <FAQ
            question="What is Frontend Mentor, and how will it help me?"
            ref={(content) => (FAQs.current[0] = content)}
          />
          <FAQ
            question="Is Frontend Mentor free?"
            ref={(content) => (FAQs.current[1] = content)}
          />
          <FAQ
            question="Can I use Frontend Mentor projects in my portfolio?"
            ref={(content) => (FAQs.current[2] = content)}
          />
          <FAQ
            question="How can I get help if I'm stuck on a challenge?"
            ref={(content) => (FAQs.current[3] = content)}
          />
        </section>
      </div>
    </main>
  );
}

export default App;
