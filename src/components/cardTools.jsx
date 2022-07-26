import styled from "styled-components";

const Wrapper = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin: 15px;

    transition: 0.6s;

    :hover {
        transform: scale(1.12);
    }
`;

const CardImage = styled.img`
    display: block;
    height: 130px;
    max-width: 130px;
    margin-bottom: 5px;
    object-position: center;
    box-shadow: var(--shadow);
    border-radius: var(--radii);

    @media (max-width: 600px) {
        height: 50px;
        margin-bottom: 3px;
    }
`;

const CardBody = styled.div`
    padding: 0.5rem 1.5rem 0.4rem;
`;

const CardTitle = styled.h3`
    margin: 0;
    color: var(--colors-text);
    font-size: var(--fs-md);
    text-align: center;
    margin-bottom: 10px;
`;

const CardTools = ({ img, name, progress }) => {
    return (
        <Wrapper>
            <CardImage src={img} alt={name} />
            <CardBody>
                <CardTitle>{name}</CardTitle>
            </CardBody>
            <div className="progress">
                <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    aria-label="Segment one"
                    style={{ width: progress }}
                    aria-valuenow={progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    {progress} %
                </div>
                <div
                    className="progress-bar bg-secondary"
                    role="progressbar"
                    aria-label="Segment two"
                    style={{ width: 100 - progress }}
                    aria-valuenow={100 - progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                ></div>
            </div>
        </Wrapper>
    );
};

export default CardTools;
