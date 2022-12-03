const items = [{
        title: "Игрушка мячик",
        description: "Ваш питомец будет счастлив!",
        tags: ["cat", "dog"],
        price: 500,
        img: "./img/1.jpeg",
    },
    {
        title: "Игрушка лабиринт",
        description: "Поможет в развитии интеллекта!",
        tags: ["cat", "dog"],
        price: 900,
        img: "./img/2.jpeg",
    },
    {
        title: "Игрушка для котят",
        description: "Отвлечет вашего питомца!",
        tags: ["cat"],
        price: 300,
        img: "./img/3.jpeg",
    },
    {
        title: "Миска «Котик»",
        description: "Подойдет и для собак!",
        tags: ["cat", "dog"],
        price: 660,
        img: "./img/4.jpeg",
    },
    {
        title: "Лоток розовый",
        description: "Теперь вы можете забыть о проблемах с туалетом",
        tags: ["cat"],
        price: 400,
        img: "./img/5.jpeg",
    },
    {
        title: "Сухой корм для кошек",
        description: "Специальная формула для милых усатиков!",
        tags: ["cat"],
        price: 200,
        img: "./img/6.jpeg",
    },
    {
        title: "Сухой корм для собак",
        description: "Содержит полный комплекс витаминов",
        tags: ["dog"],
        price: 300,
        img: "./img/7.jpeg",
    },
    {
        title: "Игрушка для собак",
        description: "Теперь вы можете не переживать за личные вещи",
        tags: ["dog"],
        price: 500,
        img: "./img/8.jpeg",
    },
    {
        title: "Лежанка",
        description: "Идеальное место для отдыха!",
        tags: ["cat", "dog"],
        price: 1500,
        img: "./img/9.jpeg",
    },
    {
        title: "Поилка для собак",
        description: "Возьмите с собой в путешествие",
        tags: ["dog"],
        price: 800,
        img: "./img/10.jpeg",
    },
    {
        title: "Переноска",
        description: "Путешествуйте с комфортом!",
        tags: ["cat", "dog"],
        price: 3500,
        img: "./img/11.jpeg",
    },
    {
        title: "Поводок для собак",
        description: "Для чудесных прогулок вместе",
        tags: ["dog"],
        price: 800,
        img: "./img/12.jpeg",
    },
];

const containerItems = document.querySelector("#shop-items");
const templateItems = document.querySelector("#item-template");
const nothingFound = document.querySelector("#nothing-found");

function prepareItems(shopItems) {
    const { title, description, tags, price, img } = shopItems;
    const item = templateItems.content.cloneNode(true);

    item.querySelector("h1").textContent = title;
    item.querySelector("p").textContent = description;
    item.querySelector(".price").textContent = price;
    item.querySelector("img").src = img;

    const tagsHolder = item.querySelector(".tags")

    tags.forEach((tag) => {
        const element = document.createElement("span");
        element.textContent = tags;
        element.classList.add("tag");
        tagsHolder.append(element);
    });
    return item;
}

let currentState = [...items];

function renderItems(arr) {
    nothingFound.textContent = "";
    containerItems.innerHTML = "";
    arr.forEach((item) => {
        containerItems.append(prepareItems(item));
    })

    if (arr.lenght == 0) {
        nothingFound.textContent = "Ничего не найдено";
    }
}

renderItems(currentState);

function sortByAlphabet(a, b) {
    if (a > b) {
        return 3;
    }

    if (a < b) {
        return -3;
    }

    if (a == b) {
        return 0;
    }
}

renderItems(currentState.sort((a, b) => sortByAlphabet(a.title, b.title)));

const buttonSearch = document.querySelector("#search-btn");
const inputSearch = document.querySelector("#search-input");

function applySearch() {
    const searchString = inputSearch.value.trim().toLowerCase();

    currentState = items.filter((el) =>
        el.title.toLowerCase().includes(searchString)
    );
    renderItems(currentState);
}

buttonSearch.addEventListener('click', applySearch);
inputSearch.addEventListener('click', applySearch);