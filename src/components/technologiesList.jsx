import styled from "styled-components";
import CardTools from "./cardTools";
import { technologies } from "../API/technologies";
import { IoConstruct } from "react-icons/io5";

const Wrapper = styled.section``;

const ContainerTools = styled.div`
    padding: 75px 50px 75px;

    @media (max-width: 600px) {
        padding: 5px 5px 5px 5px;
    }
`;
const ListTools = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
`;

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

export const TechnologiesList = () => {
    return (
        <Wrapper>
            <Title>
                <IoConstruct size="25px" />
                <span style={{ marginLeft: "0.75rem" }}>Hard Skills</span>
            </Title>
            <ContainerTools>
                <ListTools>
                    {technologies.map((tehnologie) => (
                        <CardTools
                            key={tehnologie.id}
                            img={tehnologie.image}
                            name={tehnologie.name}
                            progress={tehnologie.progress}
                        />
                    ))}
                </ListTools>
            </ContainerTools>
        </Wrapper>
    );
};
