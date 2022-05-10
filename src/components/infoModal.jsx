import { myProjects } from "../API/myProjects";
import { Modal, Container, Row, Badge } from "react-bootstrap";

const InfoModal = ({ show, onClose, project }) => {
    const changeProject = myProjects.find((p) => p.id === project);

    console.log(changeProject);
    return (
        changeProject && (
            <Modal
                show={show}
                onHide={onClose}
                size="lg"
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <div className="d-inline p-2">
                        <img
                            className="align-middle"
                            src={changeProject.icon}
                            alt="icon stack"
                            style={{ height: "35px" }}
                        />
                    </div>
                    <div className="d-inline p-2">
                        <h5 className="align-middle">{changeProject.name}</h5>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <Container fluid>
                        <Row>
                            <video src={changeProject.video} controls />
                        </Row>
                    </Container>
                    <hr />
                    <h6>Библиотеки: {changeProject.libraries}</h6>
                    <h6>Стили: {changeProject.styles}</h6>
                    {changeProject.helpTools && (
                        <h6>Инструменты: {changeProject.helpTools}</h6>
                    )}
                    <a
                        href={changeProject.code}
                        className="tooltip-test"
                        title="Переход на GitHub"
                    >
                        <Badge className="bg bg-success">Посмотреть код</Badge>
                    </a>
                    <hr />
                    <p>
                        <b>Инфо: </b>
                        {changeProject.description}
                    </p>
                </Modal.Body>
            </Modal>
        )
    );
};

export default InfoModal;
