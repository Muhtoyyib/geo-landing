/* eslint-disable react/prop-types */
import { useState } from "react";
import AccordionItem from "./Accordion-item";

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line react/prop-types
export default function FAQ({ items }) {
    const [openItems, setOpenItems] = useState(Array(items.length).fill(false));

    const toggleItem = (index) => {
      const newOpenItems = [...openItems];
      newOpenItems[index] = !newOpenItems[index];
      setOpenItems(newOpenItems);
    };

    return (
        <div className="faq">
          <h2 className="faq--header"> FAQ</h2>
          <p className="faq--description"> Reach your goals your way with features designed for the fastest, most fun way to learn a language. </p>

          {items.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isActive={openItems[index]}
              onClick={() => toggleItem(index)}
            />
          ))}
        </div>
    );
}