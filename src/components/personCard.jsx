import React from "react";
import Contacts from "./contacts";

const PersonCard = ({ person }) => {
    return (
        <div
            className="card mb-2"
            style={{ background: "none", border: "none" }}
        >
            <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center position-center">
                    <img
                        src={person.photo}
                        className="rounded shadow-1-strong me-3 w-80"
                        alt="myPhoto"
                        height="350"
                    />
                    <div className="mt-3">
                        <h4>{person.name}</h4>
                        <h5 className="text-secondary mb-1">
                            {person.profession}
                        </h5>
                        <div className="text-muted">
                            <p className="text-warning mb-0.5">
                                Опыт: {person.experience} месяцев
                            </p>
                        </div>
                        <h6>Город: {person.sity}</h6>
                        <hr />
                        <div>
                            <i>
                                <u>
                                    <h4>Follow Me</h4>
                                </u>
                            </i>
                        </div>
                        <Contacts />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonCard;
