import { useState } from "react";

import styled from "styled-components";
import AboutMe from "./aboutMePage";
import { Container } from "./container";
import MenuPanel from "./menuPanel";
import Projects from "./projects";
import { TechnologiesList } from "./technologiesList";

const Wrapper = styled.main``;

const Main = ({ show, onClose }) => {
    const [componentShow, setComponentShow] = useState({
        aboutMe: true,
        hardSkills: false,
        projects: false
    });

    const switchShow = (props) => setComponentShow(props);

    return (
        <Wrapper>
            <MenuPanel show={show} onClose={onClose} switchShow={switchShow} />
            <Container>
                {componentShow.aboutMe && <AboutMe />}
                {componentShow.hardSkills && <TechnologiesList />}
                {componentShow.projects && <Projects />}
            </Container>
        </Wrapper>
    );
};

export default Main;
