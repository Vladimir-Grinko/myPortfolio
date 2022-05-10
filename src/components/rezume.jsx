import React from "react";
import styled from "styled-components";
import rezume from "../docs/rezume.pdf";

import { IoDownload } from "react-icons/io5";

const RezumeCard = styled.div`
    display: flex;
    cursor: pointer;
    padding: 3px 3px 3px;
    justify-content: center;
    margin: 20px 0;
`;
const Rezume = () => {
    return (
        <RezumeCard>
            <a href={rezume} download="Резюме Владимир Гринько">
                <button className="btn btn-warning">
                    <IoDownload style={{ marginRight: "0.5rem" }} />
                    Скачать
                </button>
            </a>
        </RezumeCard>
    );
};

export default Rezume;
