import React from "react";
import styled from "styled-components";
import { IoPersonSharp } from "react-icons/io5";
import { person } from "../API/myInfo";
import InfoAboutMe from "./infoAboutMeCard";
import PersonCard from "./personCard";

const Title = styled.div`
    box-shadow: var(--shadow);
    font-weight: var(--fw-bold);
    font-size: var(--fs-md);
    display: flex;
    align-self: center;
    text-transform: capitalize;
    justify-content: center;
    margin: 10px 0;
`;

const AboutMe = () => {
    return (
        <>
            <Title>
                <IoPersonSharp size="25px" className="beauty-rotate" />
                <span style={{ marginLeft: "0.75rem" }}>Обо мне</span>
            </Title>
            <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                    <PersonCard person={person} />
                    
                </div>
                <div className="col-md-8">
                    <InfoAboutMe person={person} />
                </div>
            </div>
        </>
    );
};

export default AboutMe;
