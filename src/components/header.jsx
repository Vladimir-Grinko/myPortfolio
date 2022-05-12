import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import styled, { keyframes } from "styled-components";
import { IoMoon, IoMoonOutline, IoMenu } from "react-icons/io5";

import { Container } from "./container";

const animation = keyframes`
  from {
    opasity: 0; 
    transform: translateY(-4rem);
  }

  to {
    opasity: 1; 
    transform: translateY(0rem);
  }
  config: { duration: 2000};
`;

const HeaderEl = styled.header`
    box-shadow: var(--shadow);
    background-color: var(--colors-ui-base);
    opacity: 60%;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px 0;
`;

const MenuSwitcher = styled.div`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    cursor: pointer;
    opacity: 100%;
    text-transform: capitalize;
    animation: ${animation};
    animation-duration: 2s;
`;

const ModeSwitcher = styled.div`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    cursor: pointer;
    text-transform: capitalize;
    animation: ${animation};
    animation-duration: 2s;
`;

const Header = ({ onShow }) => {
    const [theme, setTheme] = useState(
        localStorage.getItem("data-theme") || "Light"
    );

    const toggleTheme = () => setTheme(theme === "Light" ? "Dark" : "Light");

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem("data-theme", theme);
    }, [theme]);

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <MenuSwitcher onClick={onShow}>
                        <Button variant="warning">
                            <IoMenu size="21px" />
                            <span
                                style={{
                                    marginLeft: "0.5rem",
                                    fontSize: "var(--fs-sm)"
                                }}
                            >
                                Меню
                            </span>
                        </Button>
                    </MenuSwitcher>

                    <ModeSwitcher onClick={toggleTheme}>
                        <Button variant="warning">
                            {theme === "Light" ? (
                                <IoMoonOutline size="18px" />
                            ) : (
                                <IoMoon size="18px" />
                            )}{" "}
                            <span
                                style={{
                                    marginLeft: "0.5rem",
                                    fontSize: "var(--fs-sm)"
                                }}
                            >
                                {theme} Theme
                            </span>
                        </Button>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
};

export default Header;
