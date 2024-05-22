//Закрытие куки
if (document.getElementById("btn-close1")){
    document.getElementById("btn-close1").onclick = function() {
        document.getElementsByClassName("coockie-main-box")[0].style.display = 'none';
    };
}
//Закрытие куки мобилка
if (document.getElementById("btn-close1m")){
    document.getElementById("btn-close1m").onclick = function() {
        document.getElementsByClassName("coockie-main-box")[0].style.display = 'none';
    };
}
//Свайперы
if(document.querySelector('.miniSwiper')){
    var swiper = new Swiper(".miniSwiper", {
        slidesPerView: 3,
        spaceBetween: 8,
        loop: true,
    });
}
if(document.querySelector('.miniSwiper-full')){
    var swiper = new Swiper(".miniSwiper-full", {
        slidesPerView: 1,
        spaceBetween: 8,
        loop: true,
    });
}
if(document.querySelector('.miniSwiperNoLoop')){
    var swiper = new Swiper(".miniSwiperNoLoop", {
        slidesPerView: 3,
        spaceBetween: 8,
    });
}
if(document.querySelector('.miniSwiperNoLoopProduct')){
    var swiper = new Swiper(".miniSwiperNoLoopProduct", {
        slidesPerView: 3,
        spaceBetween: 32,
    });
}
//Модальное окно избраное
var modallike = document.getElementById("modallike");
var btnlike = document.getElementById("btnlike");
var spanlike = document.getElementById("btn-close-like");
if (modallike && btnlike && spanlike) {
    btnlike.onclick = function() {
        modallike.style.display = "flex";
    }
    spanlike.onclick = function() {
        modallike.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modallike) {
            modallike.style.display = "none";
        }
    }
}
//Модальное окно корзина
var modalshop = document.getElementById("modalshop");
var modalshopbtn = document.getElementById("modalshopbtn");
var spanshop = document.getElementById("btn-close-shop");
if (modalshop && modalshopbtn && spanshop) {
    modalshopbtn.onclick = function() {
        modalshop.style.display = "flex";
    }
    spanshop.onclick = function() {
        modalshop.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modalshop) {
            modalshop.style.display = "none";
        }
    }
}
//Модальное окно поиск
var modalSearch = document.getElementById("modalsearch");
var btnSearch = document.getElementById("btnsearch");
var spanSearch = document.getElementById("btn-close-search");
if (modalSearch && btnSearch && spanSearch) {
    btnSearch.onclick = function() {
        modalSearch.style.display = "flex";
        spanSearch.style.display = "flex";
        btnSearch.style.display = "none";
        modalshopbtn.style.display = "none";
        btnlike.style.display = "none";
    }
    spanSearch.onclick = function() {
        modalSearch.style.display = "none";
        spanSearch.style.display = "none";
        btnSearch.style.display = "flex";
        modalshopbtn.style.display = "flex";
        btnlike.style.display = "flex";
    }
    window.onclick = function(event) {
        if (event.target == modalSearch) {
            modalSearch.style.display = "none";
        }
    }
}
//Модальное окно фильтров
var modalfilterone = document.getElementById("modalfilterone");
var modalfilterbtn1 = document.getElementById("modalfilterbtn1");
var spanfilter1 = document.getElementById("btn-close-filter1");
if (modalfilterone && modalfilterbtn1 && spanfilter1) {
    modalfilterbtn1.onclick = function() {
        modalfilterone.style.display = "flex";
    }
    spanfilter1.onclick = function() {
        modalfilterone.style.display = "none";
        console.log(document.getElementById("btn-close-filter1"));
    }
    window.onclick = function(event) {
        if (event.target == modalfilterone) {
            modalfilterone.style.display = "none";
        }
    }
}
//Модальное окно бургера
var modalburger = document.getElementById("modalburger");
var modalburgerbtn = document.getElementById("modalburgerbtn");
if (modalburger && modalburgerbtn) {
    modalburgerbtn.onclick = function() {
        if (modalburger.style.display == "flex") {
            modalburger.style.display = "none";
        }
        else{
            modalburger.style.display = "flex";
        }
    }
    window.onclick = function(event) {
        if (event.target == modalburger) {
            modalburger.style.display = "none";
        }
    }
}
//Модальное окно бургера Женское
var modalburgerZH = document.getElementById("modalburgerZH");
var modalburgerbtnZH = document.getElementById("modalburgerbtnZH");
if (modalburgerZH && modalburgerbtnZH) {
    console.log("ЗАШЛО")
    modalburgerbtnZH.onmouseover = function() {
        modalburgerZH.style.display = "flex";
    }
    modalburgerZH.onmouseover = function(){
        modalburgerZH.style.display = "flex";
    }
    modalburgerZH.onmouseout  = function(){
        modalburgerZH.style.display = "none";
        console.log('Закрылось по функции')
    }
    window.onclick = function(event) {
        if (event.target == modalburgerZH) {
            modalburgerZH.style.display = "none";
        }
    }
}
//Модальное окно бургера Женское мобилка
var modalburgerZHm = document.getElementById("modalburgerZHm");
var modalburgerbtnZHm = document.getElementById("modalburgerbtnZHm");
if (modalburgerZHm && modalburgerbtnZHm) {            
    modalburgerbtnZHm.onclick = function() {
        if (modalburgerZHm.style.display == "flex") {
            modalburgerZHm.style.display = "none";
        }
        else{
            modalburgerZHm.style.display = "flex";
        }
    }
    window.onclick = function(event) {
        if (event.target == modalburgerZHm) {
            modalburgerZHm.style.display = "none";
        }
    }
}
// Изменение навигационного меню при выборе другого пункта
document.addEventListener('click', e => {
    if(e.target.classList.contains("onClickMenuBorder")){
        var children = e.target.parentNode.parentNode.children;
        for (var i = 0; i < children.length; i++) {
            children[i].firstElementChild.innerHTML = "";
            children[i].style.borderBottom = "0px";
        }

        e.target.parentNode.firstElementChild.innerHTML = "Выбрано";
        e.target.parentNode.style.borderBottom = "1px solid var(--red)";
    }
    else if(e.target.classList.contains("onClickMenu")){
        var children = e.target.parentNode.parentNode.children;
        for (var i = 0; i < children.length; i++) {
            children[i].firstElementChild.innerHTML = "";
            children[i].lastElementChild.style.fontFamily = "Inter-Light";
        }

        e.target.parentNode.firstElementChild.innerHTML = "Выбрано";
        e.target.parentNode.lastElementChild.style.fontFamily = "Inter-Medium";
    }
    else if(e.target.classList.contains("onClickMenu-color")){
        var children = e.target.parentNode.parentNode.children;
        for (var i = 0; i < children.length; i++) {
            children[i].firstElementChild.innerHTML = "";
            children[i].lastElementChild.style.fontFamily = "Inter-Light";
        }

        e.target.parentNode.firstElementChild.innerHTML = "Выбран цвет";
        e.target.parentNode.lastElementChild.style.fontFamily = "Inter-Medium";
    }
    else if(e.target.classList.contains("onTwoClickMenu")){
        var children = e.target.parentNode.parentNode.parentNode.children;
        for (var i = 0; i < children.length; i++) {
            children[i].firstElementChild.innerHTML = "";
            children[i].lastElementChild.style.fontFamily = "Inter-Light";
        }

        e.target.parentNode.parentNode.firstElementChild.innerHTML = "Выбрано";
        e.target.parentNode.parentNode.lastElementChild.style.fontFamily = "Inter-Medium";
    }
    else if(e.target.classList.contains("onTwoClickMenu-color")){
        var children = e.target.parentNode.parentNode.parentNode.children;
        for (var i = 0; i < children.length; i++) {
            children[i].firstElementChild.innerHTML = "";
            children[i].lastElementChild.style.fontFamily = "Inter-Light";
        }

        e.target.parentNode.parentNode.firstElementChild.innerHTML = "Выбран цвет";
        e.target.parentNode.parentNode.lastElementChild.style.fontFamily = "Inter-Medium";
    }
}                   
);