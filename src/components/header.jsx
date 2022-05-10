import { useState, useEffect } from "react";
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
    opacity: 50%;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`;

const MenuSwitcher = styled.div`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    cursor: pointer;
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
        localStorage.getItem("data-theme") || "light"
    );

    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem("data-theme", theme);
    }, [theme]);

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <MenuSwitcher onClick={onShow}>
                        <IoMenu size="18px" />
                        <span style={{ marginLeft: "0.75rem" }}>Меню</span>
                    </MenuSwitcher>

                    <ModeSwitcher onClick={toggleTheme}>
                        {theme === "light" ? (
                            <IoMoonOutline size="14px" />
                        ) : (
                            <IoMoon size="14px" />
                        )}{" "}
                        <span style={{ marginLeft: "0.75rem" }}>
                            {theme} Theme
                        </span>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
};

export default Header;
