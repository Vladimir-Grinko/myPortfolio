import React, { useState } from "react";
import ModalCertificate from "./modalCertificate";

const InfoAboutMe = ({ person }) => {
    const [show, setShow] = useState(false);

    const onClose = () => setShow(false);
    const onShow = () => setShow(true);
    return (
        <div
            className="card mb-2"
            style={{
                background: "none",
                border: "none",
                color: "var(--colors-text)"
            }}
        >
            <ModalCertificate
                show={show}
                onClose={onClose}
                image={person.diplom}
            />{" "}
            <div className="card-body ">
                <p>
                    <u>
                        <h6>Обо мне: </h6>
                    </u>
                    {person.info}
                </p>
                <hr />
                <i>
                    <u>
                        <h6>Цели: </h6>
                    </u>
                    {person.intent}
                </i>
                <hr />
                <p>{person.team}</p>
                <div className="container">
                    <div className="row align-items-center justify-content-end">
                        <div className="col">
                            <ul style={{ marginBlockStart: "15px" }}>
                                <li>Образование: {person.schooling}</li>
                                <li>Языки: {person.languages}</li>
                                <li>Курсы: {person.courses}</li>
                            </ul>
                        </div>
                        <div className="col">
                            <img
                                onClick={onShow}
                                style={{ cursor: "pointer" }}
                                className="rounded"
                                src={person.diplom}
                                alt="diplom"
                                height="145px"
                                title="Посмотреть"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoAboutMe;
