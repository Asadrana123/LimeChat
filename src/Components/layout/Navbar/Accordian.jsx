import React, { useState } from 'react';
import './Accordian.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import DropdownMenu from './DropDown';
import { useRef } from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
const AccordionItem = ({ title, content, isOpen, onToggle }) => {
    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={onToggle}>
                {title}
                {content !== '' && (
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`margin-icon ${isOpen ? 'rotate' : ''}`}
                    />
                )}
            </div>
            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                {typeof content === 'string' ? (
                    <div className="accordion-content-html"  dangerouslySetInnerHTML={{ __html: content }} />
                ) : (
                    content
                )}
            </div>
        </div>
    );
};

const Accordion = ({isOpen}) => {
    const accordionRef = useRef(null);
    const [openIndex,setOpenIndex]=useState(null);
    useEffect(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 650px)", () => {
            // Animation for screens 650px and above
            if (isOpen) {
                gsap.to(accordionRef.current, { y: '70px', duration: 0.5 });
            } else {
                gsap.to(accordionRef.current, { y: '-600px', duration: 0.5 });
            }
        });

        mm.add("(max-width: 650px)", () => {
            // Animation for screens below 650px
            if (isOpen) {
                gsap.to(accordionRef.current, { y: '60px', duration: 0.5 });
            } else {
                gsap.to(accordionRef.current, { y: '-600px', duration: 0.5 });
            }
        });

        // Clean up matchMedia listeners on component unmount
        return () => mm.revert();
    }, [isOpen]);
    const items = [
        {
            title: 'Product',
            content: <DropdownMenu />
        },
        { title: 'Pricing', content: '' },
        { title: 'Compare', content: '' },
        {
            title: 'Resources',
            content: `
                    <span href="#">Blog</span>
                    <span href="#">E-books</span>
                    <span href="#">Webinars</span>
                `
        },
        {
            title: 'About Us',
            content: `
                    <span href="#">Our Story</span>
                    <span href="#">Team</span>
                    <span href="#">Careers</span>
               `
        },
    ];

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="accordion" ref={accordionRef}>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onToggle={() => toggleItem(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;
