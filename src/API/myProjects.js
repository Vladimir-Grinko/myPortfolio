import aimTraning from "../images/access/aimTraning.jpeg";
import friends from "../images/access/friends.jpg";
import kitchen from "../images/access/kitchen.jpg";
import onlineStore from "../images/access/online-store.png";
import traveling from "../images/access/traveling.png";
import mern from "../images/access/mern.png";
import jsHtml from "../images/access/js_html_css.jpg";
import currencyConverter from "../images/access/currency-converter.png";
import vue from "../images/access/vue.png";
import vAimTraning from "../video/aim-traning.mp4";
import vFastCompany from "../video/fast-company.mp4";
import vSlider from "../video/slider.mp4";
import vItalianTaste from "../video/italian-taste.mp4";
import vOnlineStore from "../video/online-store.mp4";
import vCurrencyConverter from "../video/currency-converter.mp4";

export const myProjects = [
    {
        id: 11,
        name: "Конвертер валют",
        libraries: "Vue.js, Vuex",
        image: currencyConverter,
        icon: vue,
        video: vCurrencyConverter,
        code: "https://vladimir-grinko.github.io/currency-converter/",
        helpTools: "API курсов валют Центрального Банка России",
        info: "Конвертер валют с определением местоположения",
        styles: "MDBootstrap, CSS",
        description:
            "Я разрботал адаптивное приложение `Конвертер валют` на Vue.js с Vuex, который определяет местоположение пользователя и выставляет по умолчанию валюту в данном регионе для конвертации. Курсы валют были взяты с открытого API Центрального Банка России. Еще одно преимущество - конвертация на лету, т.е. при вводе суммы валюты, изменении конвертируемой валюты или изменении валюты, в которую производим конвертацию, получаем результат."
    },
    {
        id: 1,
        name: "Fast Company",
        libraries: "React, Redux, Axios, Bootstrap, Lodash, Nanoid, PropTypes",
        image: friends,
        icon: mern,
        video: vFastCompany,
        code: "https://github.com/Vladimir-Grinko/fast-company",
        helpTools: "React-toastify, Express.JS, Chalk, Mongo DB, Docker",
        info: "Мною был разработан сервис по поиску друзей. Регистрируйтесь и ищите людей по их рейтингу, качествам и профессии.",
        styles: "CSS, Bootstrap",
        description:
            "В проекте есть различные запросы на сервер; регистрация/авторизация; роутинг; защищенные роуты; память адреса (если вы не были авторизованы, а захотели перейти на защищенный роут, вам будет предложено авторизоваться, и после браузер Вас перекинет куда вы хотели попасть); композиция компонентов; фильтрация; пагинация; сортировка; валидация форм, обработка ошибок, глобальный loader, нормализация данных; трансформеры данных."
    },
    {
        id: 2,
        name: "Online Store",
        libraries: "React, Redux, Axios, Bootstrap, Lodash, PropTypes",
        image: onlineStore,
        icon: mern,
        video: vOnlineStore,
        code: "https://github.com/Vladimir-Grinko/online-store-fullstack",
        helpTools: "React-toastify, Express.JS, Chalk, Mongo DB, Docker",
        info: "Я разработал эргономичный и легкий в использовании интернет-магазин, воспользоваться которым сможет даже Ваша бабушка.",
        styles: "CSS, BOOTSWATCH, Bootstrap",
        description:
            "Освоив достаточно React, Redux и Node.JS, решил создать онлайн магазин FullStack. В этом проекте мне удалось реализовать: регистрацию/авторизацию; защищенный роутинг; собственную базу данных; пагинацию; сортировку; поиск по названию; админ-панель в которой можно редактировать и удалять товар, или добавлять новый товар с проверкой на сервере на уникальность названия; валидация форм; проверка на сервере роли пользователя; для покупателя, само собой, есть корзина с возможностью удаления из нее товара и страница, в которой содержится информация о прошлых покупках. Все поставленные задачи в этом проекте перед собой я выполнил, реализован компонентный подход и весь необходимый функционал."
    },
    {
        id: 3,
        name: "Лендинг для туристической фирмы",
        libraries: "Чистый JavaScript, HTML",
        image: traveling,
        icon: jsHtml,
        video: vSlider,
        code: "https://github.com/Vladimir-Grinko/slider",
        helpTools: "",
        info: "Простой приятный лендинг для туристической фирмы",
        styles: "CSS",
        description:
            "Одна из первых работ, когда я влюбился в JavaScript. Реализованы обработчики событий и анимации."
    },
    {
        id: 4,
        name: "Лендинг для итальянского ресторана",
        libraries: "Чистый JavaScript, HTML",
        image: kitchen,
        icon: jsHtml,
        video: vItalianTaste,
        code: "https://github.com/Vladimir-Grinko/italian-taste",
        helpTools: "",
        info: "Кто не любит вкусно поесть?",
        styles: "CSS",
        description:
            "Проект, при выполнении которого, я начал понимать возможности JavaScript и его масштабы. Реализованы обработчики событий и анимации."
    },
    {
        id: 5,
        name: "Aim Training",
        libraries: "Чистый JavaScript, HTML",
        image: aimTraning,
        icon: jsHtml,
        video: vAimTraning,
        code: "https://github.com/Vladimir-Grinko/aim-game",
        helpTools: "",
        info: "Простой и занимательный тренажер для развития внимательности скорости реакции.",
        styles: "CSS",
        description:
            "Выбираешь время длительности работы тренажера. Здесь используется setTimeout и математические функции"
    }
];
