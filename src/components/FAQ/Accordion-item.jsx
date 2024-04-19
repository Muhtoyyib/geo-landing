import { CaretRight, CaretDown  } from "@phosphor-icons/react";


// eslint-disable-next-line react/prop-types
export default function AccordionItem({ title, content, isActive, onClick }) {
    return (
        <div className={`faq--item ${isActive ? 'active' : ''}`}>
            <div className="faq--item__header" onClick={onClick}>
             <p>{title}</p>
             {isActive ? <CaretDown size={20} color="#505050" /> : <CaretRight size={20} color="#505050" />}
            </div>
            {isActive && <div className="faq--item__content">{content}</div>}
        </div>
    );
}

  