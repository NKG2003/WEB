const langButtons = document.querySelectorAll("[data-btn]");
const allLangs = ["ru", "en", "kz"];
const currentPathName = window.location.pathname;
let currentLang =
	localStorage.getItem("language") || checkBrowserLang() || "ru";
let currentTexts = {};

const homeTexts = {
    "main" :  {
        "ru": "Главная",
        "en": "Main",
        "kz": "Басты бет",
    }, 
    "company" :  {
        "ru": "О компания",
        "en": "About the company",
        "kz": "Компания туралы ",
    }, 
    "history": {
        "ru": "объем памяти",
        "en": "History",
        "kz": "Тарих",
    }, 
    "organizational-structure": {
        "ru": "Организационная структура",
        "en": "Organizational structure",
        "kz": "Ұйымдық құрылым",
    }, 
    "leadership": {
        "ru": "Руководство",
        "en": "leadership",
        "kz": "Руководство",
    }, 

    "types-of-activities": {
        "ru": "Виды деятельности",
        "en": "Types of activities",
        "kz": "Қызмет түрлері",
    }, 
    "development-plans": {
        "ru": "Планы развития",
        "en": "Development plans",
        "kz": "Даму жоспарлары",
    }, 
    "reporting": {
        "ru": "Отчетность",
        "en": "Reporting",
        "kz": "Отчетность",
    }, 

    "regulatory-documents": {
        "ru": "Нормативные документы",
        "en": "Regulatory documents",
        "kz": "Нормативтік құжаттар",
    }, 
    "ads": {
        "ru": "ОбЪявления",
        "en": "Regulatory documents",
        "kz": "жарнама",
    }, 
    "projects": {
        "ru": "Проекты",
        "en": "Projects",
        "kz": "Жобалар",
    }, 
   
    "news": {
        "ru": "Новости",
        "en": "News",
        "kz": "Жаңалықтар",
    }, 
    "purchases": {
        "ru": "Закупки",
        "en": "Purchases",
        "kz": "Закупки",
    }, 
    "contacts": {
        "ru": "Контакты",
        "en": "Contacts",
        "kz": "Байланыс",
    }, 
    "vacancy": {
        "ru": "Вакансия",
        "en": "Vacancy",
        "kz": "Вакансия",
    }, 
    "search": {
        "ru": "Поиск",
        "en": "Regulatory documents",
        "kz": "Іздеу",
    }, 
    "language": {
        "ru": "Язык",
        "en": "Lang",
        "kz": "Тіл",
    }, 
    "russian": {
        "ru": "рус",
        "en": "rus",
        "kz": "рус",
    }, 
    "kazakh": {
        "ru": "каз",
        "en": "kaz",
        "kz": "қаз",
    }, 
    "english": {
        "ru": "анг",
        "en": "eng",
        "kz": "анг",
    }, 
}
checkActiveLangButton();

// Проверка пути страницы сайта
function checkPagePathName() {
	switch (currentPathName) {
		case "/index.html":
			currentTexts = homeTexts;
			break;
		case "/another_page.html":
			currentTexts = anotherTexts;
			break;

		default:
			currentTexts = homeTexts;
			break;
	}
}
checkPagePathName();

// Изменение языка у текстов
function changeLang() {
	for (const key in currentTexts) {
		let elem = document.querySelector(`[data-lang=${key}]`);
		if (elem) {
			elem.textContent = currentTexts[key][currentLang];
		}
	}
}
changeLang();

// Вешаем обработчики на каждую кнопку
langButtons.forEach((btn) => {
	btn.addEventListener("click", (event) => {
		if (!event.target.classList.contains("header__btn_active")) {
			currentLang = event.target.dataset.btn;
			localStorage.setItem("language", event.target.dataset.btn);
			resetActiveClass(langButtons, "header__btn_active");
			btn.classList.add("header__btn_active");
			changeLang();
		}
	});
});

// Сброс активного класса у переданного массива элементов
function resetActiveClass(arr, activeClass) {
	arr.forEach((elem) => {
		elem.classList.remove(activeClass);
	});
}

// Проверка активной кнопки
function checkActiveLangButton() {
	switch (currentLang) {
		case "ru":
			document
				.querySelector('[data-btn="ru"]')
				.classList.add("header__btn_active");
			break;
		case "en":
			document
				.querySelector('[data-btn="en"]')
				.classList.add("header__btn_active");
			break;
		case "kz":
			document
				.querySelector('[data-btn="kz"]')
				.classList.add("header__btn_active");
			break;

		default:
			document
				.querySelector('[data-btn="ru"]')
				.classList.add("header__btn_active");
			break;
	}
}
checkActiveLangButton();

// Проверка языка браузера
function checkBrowserLang() {
	const navLang = navigator.language.slice(0, 2).toLowerCase();
	const result = allLangs.some((elem) => {
		return elem === navLang;
	});
	if (result) {
		return navLang;
	}
}

console.log("navigator.language", checkBrowserLang());
