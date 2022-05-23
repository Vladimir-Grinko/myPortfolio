import styled from "styled-components";
import React from "react";

import { Offcanvas } from "react-bootstrap";
import {
    IoCodeSlashSharp,
    IoPersonSharp,
    IoImages,
    IoConstruct,
    IoGitNetwork,
    IoDocumentText
} from "react-icons/io5";

import Contacts from "./contacts";
import Rezume from "./rezume";

const OffcanvasStyled = styled(Offcanvas)`
    box-shadow: var(--shadow);
    border-radius: var(--radii);
    opacity: 80%;
    width: 250px;
    height: 550px;
    margin-top: 85px;
`;

const MenuSwitcher = styled.div`
    font-weight: var(--fw-bold);
    font-size: var(--fs-md);
    cursor: pointer;
    text-transform: capitalize;
    transition: 0.2s;

    :hover {
        transform: scale(1.1);
    }
`;

const MenuPanel = ({ show, onClose, switchShow }) => {
    return (
        <OffcanvasStyled show={show} onHide={onClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    <IoCodeSlashSharp size="16px" />
                    <span style={{ marginLeft: "0.5rem" }}>Владимир</span>
                    <hr />
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ul>
                    <li>
                        <MenuSwitcher
                            onClick={() =>
                                switchShow({
                                    aboutMe: true,
                                    hardSkills: false,
                                    projects: false
                                })
                            }
                        >
                            <IoPersonSharp
                                size="16px"
                                className="beauty-rotate"
                            />
                            <span style={{ marginLeft: "0.75rem" }}>
                                Обо мне
                            </span>
                        </MenuSwitcher>
                    </li>
                    <li style={{ margin: "15px 0" }}>
                        <MenuSwitcher
                            onClick={() =>
                                switchShow({
                                    aboutMe: false,
                                    hardSkills: true,
                                    projects: false
                                })
                            }
                        >
                            <IoConstruct
                                size="16px"
                                className="beauty-rotate"
                            />
                            <span style={{ marginLeft: "0.75rem" }}>
                                Мои Навыки
                            </span>
                        </MenuSwitcher>
                    </li>
                    <li style={{ margin: "15px 0" }}>
                        <MenuSwitcher
                            onClick={() =>
                                switchShow({
                                    aboutMe: false,
                                    hardSkills: false,
                                    projects: true
                                })
                            }
                        >
                            <IoImages size="16px" className="beauty-rotate" />
                            <span style={{ marginLeft: "0.75rem" }}>
                                Мои Проекты
                            </span>
                        </MenuSwitcher>
                    </li>
                </ul>
                <div style={{ margin: "20px 0" }}>
                    <hr />
                </div>
                <Offcanvas.Title>
                    <IoGitNetwork size="16px" />
                    <span style={{ marginLeft: "0.5rem" }}>Контакты</span>
                </Offcanvas.Title>
                <Contacts />
                <hr />
                <Offcanvas.Title>
                    <IoDocumentText size="16px" />
                    <span style={{ marginLeft: "0.5rem" }}>Резюме</span>
                </Offcanvas.Title>
                <Rezume />
            </Offcanvas.Body>
        </OffcanvasStyled>
    );
};

export default MenuPanel;
