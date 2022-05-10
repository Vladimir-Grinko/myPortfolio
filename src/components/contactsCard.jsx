import React from "react";
import Contacts from "./contacts";

const ContactsCard = () => {
    return (
        <div className="card mb-3" style={{ background: "none" }}>
            <div className="card-body d-flex flex-column justify-content-center text-center">
                <div><h4>Follow Me</h4></div>
                <Contacts />
            </div>
        </div>
    );
};

export default ContactsCard;
