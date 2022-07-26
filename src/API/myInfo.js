import myPhoto from "../images/access/myPhoto.jpg";
import course from "../images/access/course.jpg";
import certificate from "../images/access/certificate.jpg";
import { getExperience } from "../utils/getExperience";

export const person = {
    name: "Владимир Гринько",
    profession: "Frontend Developer",
    sity: "Санкт-Петербург",
    experience: getExperience(),
    photo: myPhoto,
    info: "Привет! Меня зовут Владимир, нахожусь в активном поиске компании на должность JavaScript Frontend Developer. С 2020 года углубленно изучаю программирование и с первых месяцев понял, что это моя основная деятельность. Освоив самостоятельно базу JavaScript, продолжил профессиональное обучение и стажировку в Result School. Я выполняю поставленные задачи в указанные сроки, ответственно отношусь к работе, люблю ставить цели и достигать их, ценю развитие. Моими сильными сторонами являются: аккуратность; «здоровый» перфекционизм; внимательность; высокая обучаемость и высокая работоспособность; умение быстро вливаться в команду; усидчивость и спокойный характер. Приоритет - программирование, к которому питаю бескрайний интерес.",
    intent: "Через 3 года вижу себя профессионалом в IT сфере, работающим с такими же единомышленниками, которые получают огромное удовольствие от разработки, моя цель - стать Senior разработчиком, помогать бизнесу зарабатывать деньги и автоматизировать различные процессы. Всегда готов освоить новые технологии и применить их в проекте.",
    schooling: "Высшее",
    languages: "Английский А2, Немецкий А2",
    courses: "SoloLearn, Result School",
    diplom: course,
    myCertificate: certificate,
    team: "Командный игрок - считаю, что поистине мощное и большое приложение один человек не сможет сделать, а вот команда разработчиков способна на многое. И, в принципе, всегда считал, что хороший сервис – это всегда про команду, а не про одного человека."
};
