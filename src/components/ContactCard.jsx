import { useEffect, useState } from 'react';
import Card from './Card';
import './ContactCard.css';

const ContactCard = () => {
    // onSubmit function from https://web3forms.com/#start
    const [result, setResult] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && showPopup) {
                setShowPopup(false);
            }
        }

        if (showPopup) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [showPopup]);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        // Public access key for Web3Forms
        formData.append("access_key", "1ccd3865-5e1b-4a02-b8e3-c31be8dbcfe6");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Message sent successfully!");
            setShowPopup(true);
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }

        setTimeout(() => {
            setResult("");
            setShowPopup(false);
        }, 3000);
    };

    return (
        <Card id='contact'>
            <h2>Contact Me</h2>
            <form className="contact-form" onSubmit={onSubmit}>
                <div className="input-wrapper" id="name-wrapper">
                    <input className="field-box" id="name-box" type="text" name="name" placeholder='' required/>
                    <label htmlFor="name-box" className="input-label">Name</label>
                </div>

                <div className="input-wrapper" id="email-wrapper">
                    <input className="field-box" id="email-box" type="email" name="email" placeholder='' required/>
                    <label htmlFor="email-box" className="input-label">Email</label>
                </div>

                <div className="input-wrapper" id="message-wrapper">
                    <textarea className="field-box" id="message-box" name="message" placeholder='' required></textarea>
                    <label htmlFor="message-box" className="input-label">Message</label>
                </div>

                <button className="submit-button" type="submit">Submit Form</button>

            </form>
            {showPopup && (
                <div className="popup" onClick={() => setShowPopup(false)} >
                    <div className="popup-box" onClick={(e) => e.stopPropagation()}>{result}</div>
                </div>
            )}
        </Card>
    );
}

export default ContactCard;