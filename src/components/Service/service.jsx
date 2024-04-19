/* eslint-disable react/prop-types */
import { CheckSquare } from "@phosphor-icons/react";

import Button from "../Button/Button";

// eslint-disable-next-line react/prop-types
function Service({ img, heading, layout, description, bullet }) {
    if (layout === 'left') {
        return (
            <div className="service">
                <div className="service--container service--img">
                    <img src={img.src} alt={img.alt} />
                </div>

                <div className="service--container service--info">
                    <div className="service--container__content">
                        <h1 className="service--heading"> {heading} </h1>
                        <p className="service--paragraph"> {description} </p>

                        <ul>
                            {bullet.map((data, index) => (
                                <li key={index}>
                                    <CheckSquare size={32} color="#37b24d" /> {data}
                                </li>
                            ))}
                        </ul>

                        <Button el="b" className="btn btn--service">
                            Get app now
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="service">
            <div className="service--container service--info">
                <div className="service--container__content">
                    <h1 className="service--heading"> {heading} </h1>
                    <p className="service--paragraph"> {description} </p>

                    <ul>
                        {bullet.map((data, index) => (
                            <li key={index}>
                                <CheckSquare size={32} color="#37b24d" /> {data}
                            </li>
                        ))}
                    </ul>

                    <Button el="b" className="btn btn--service">
                        Get app now
                    </Button>
                </div>
            </div>

            <div className="service--container service--img" style={{ width: '12rem' }}>
                <img src={img.src} alt={img.alt} />
            </div>
        </div>
    );
}

export default Service;
