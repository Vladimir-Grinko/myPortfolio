import { useState } from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import styled from "styled-components";
import { myProjects } from "../API/myProjects";
import { IoImages, IoInformationCircleSharp } from "react-icons/io5";
import InfoModal from "./infoModal";

const Section = styled.section``;

const Wrapper = styled.div`
    display: flex;
    align-self: center;
    justify-content: center;
    margin: 10px 0;
    padding: 10px;
`;

const Title = styled.div`
    box-shadow: var(--shadow);
    order: first;
    font-weight: var(--fw-bold);
    font-size: var(--fs-md);
    display: flex;
    align-self: center;
    text-transform: capitalize;
    justify-content: center;
    margin: 10px 0;
`;

const WrapperDescription = styled.div`
    font-weight: var(--fw-bold);
    font-size: var(--fs-md);
    display: flex;
    align-self: center;
    justify-content: center;
    margin: 10px;
`;

const Projects = () => {
    const [show, setShow] = useState({ show: false, projectId: "" });

    const onClose = () => setShow({ show: false, projectId: "" });
    const onShow = (id) => setShow({ show: true, projectId: id });

    return (
        <Section>
            <Title>
                <IoImages size="25px" className="beauty-rotate" />
                <span style={{ marginLeft: "0.75rem" }}>Мои проекты</span>
            </Title>
            <Wrapper>
                <Carousel variant="dark">
                    {myProjects.map((project) => (
                        <Carousel.Item interval="150000" key={project.id}>
                            <Container fluid>
                                <Row>
                                    <img
                                        className="rounded"
                                        src={project.image}
                                        alt={project.name}
                                    />
                                </Row>
                            </Container>
                            <WrapperDescription>
                                <Carousel.Caption
                                    style={{
                                        position: "static",
                                        color: "var(--colors-text)"
                                    }}
                                >
                                    <h4>
                                        {project.name}
                                        <button
                                            className="btn btn-warning text-center"
                                            style={{ marginLeft: "1rem" }}
                                            onClick={() => onShow(project.id)}
                                        >
                                            <IoInformationCircleSharp size="25px" />
                                            Подробнее
                                        </button>
                                    </h4>
                                    <p>{project.info}</p>
                                </Carousel.Caption>
                            </WrapperDescription>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Wrapper>
            <InfoModal
                show={show.show}
                onClose={onClose}
                project={show.projectId}
            />
        </Section>
    );
};

export default Projects;
