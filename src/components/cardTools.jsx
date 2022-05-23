import styled from "styled-components";

const Wrapper = styled.li`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -webkit-box-align: center;
    -ms-flex-align: center;
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

const CardTools = ({ img, name }) => {
    return (
        <Wrapper>
            <CardImage src={img} alt={name} />
            <CardBody>
                <CardTitle>{name}</CardTitle>
            </CardBody>
        </Wrapper>
    );
};

export default CardTools;
