import React, { useState } from "react";
import styled from "styled-components";
import ModalCertificate from "./modalCertificate";
import ModalEndCertificate from "./modalEndCertificate";

const ImageDiv = styled.div`
    margin: 3px;
    cursor: pointer;
    transition: 0.2s;

    :hover {
        transform: scale(1.1);
    }
`;

const InfoAboutMe = ({ person }) => {
    const [showModal, setShowModal] = useState(false);
    const [showEndModal, setShowEndModal] = useState(false);

    const onCloseModal = () => setShowModal(false);
    const onShowModal = () => setShowModal(true);

    const onCloseEndModal = () => setShowEndModal(false);
    const onShowEndModal = () => setShowEndModal(true);

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
                show={showModal}
                onClose={onCloseModal}
                image={person.diplom}
            />{" "}
            <ModalEndCertificate
                show={showEndModal}
                onClose={onCloseEndModal}
                image={person.myCertificate}
            />{" "}
            <div className="card-body ">
                <u>
                    <h6>Обо мне: </h6>
                </u>
                <p>{person.info}</p>
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
                        <div className="col d-flex justify-content-center">
                            <ImageDiv>
                                <img
                                    onClick={onShowModal}
                                    className="rounded"
                                    src={person.diplom}
                                    alt="diplom"
                                    height="145px"
                                    title="Посмотреть"
                                />
                            </ImageDiv>
                            <ImageDiv>
                                <img
                                    onClick={onShowEndModal}
                                    className="rounded"
                                    src={person.myCertificate}
                                    alt="certificate"
                                    height="145px"
                                    title="Посмотреть"
                                />
                            </ImageDiv>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoAboutMe;
