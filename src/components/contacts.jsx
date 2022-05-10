import styled from "styled-components";
import vk from "../images/forTheme/vk.svg";
import gitHub from "../images/forTheme/gitHub.svg";
import inst from "../images/forTheme/inst.svg";
import telegram from "../images/forTheme/telegram.svg";
import email from "../images/forTheme/email.svg";

const ContactsList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 20px 0;
`;

const ContactCard = styled.div`
    cursor: pointer;
    padding: 3px 3px 3px;
`;

const ContactImage = styled.img`
    display: block;
    height: 35px;
    width: 35px;
    margin-bottom: 2px;
    object-position: center;
    box-shadow: var(--shadow);
    border-radius: var(--radii);
    background: black;
`;

const Contacts = () => {
    return (
        <ContactsList>
            <ContactCard>
                <a href="https://github.com/Vladimir-Grinko" title="GitHub">
                    <ContactImage src={gitHub} alt="Иконка сервиса GitHub" />
                </a>
            </ContactCard>
            <ContactCard>
                <a href="https://vk.com/steel_afterman" title="Вконтакте">
                    <ContactImage src={vk} alt="Иконка сервиса VK" />
                </a>
            </ContactCard>
            <ContactCard>
                <a href="https://t.me/grinko_vladimir" title="Telegram">
                    <ContactImage
                        src={telegram}
                        alt="Иконка сервиса Telegram"
                    />
                </a>
            </ContactCard>
            <ContactCard>
                <a
                    href="https://instagram.com/vovan_officiall"
                    title="Instagram"
                >
                    <ContactImage src={inst} alt="Иконка сервиса Instagram" />
                </a>
            </ContactCard>
            <ContactCard>
                <a href="mailto:vladimir.grinko055@gmail.com" title="Email">
                    <ContactImage src={email} alt="Иконка сервиса Email" />
                </a>
            </ContactCard>
        </ContactsList>
    );
};

export default Contacts;
