import { Modal, Container, Row } from "react-bootstrap";
import { GrCertificate } from "react-icons/gr";

const ModalCertificate = ({ show, onClose, image }) => {
    return (
        <Modal
            show={show}
            onHide={onClose}
            size="md"
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <div className="d-inline p-2">
                    <GrCertificate size="30px" />
                </div>
                <div className="d-inline p-2">
                    <h5 className="align-middle">
                        Сертификат о прохождении курса в школе "Result School"
                    </h5>
                </div>
            </Modal.Header>
            <Modal.Body>
                <Container fluid>
                    <Row>
                        <img src={image} alt="certificate" />
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    );
};

export default ModalCertificate;
