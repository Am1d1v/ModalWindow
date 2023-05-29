

const modalWindow = document.querySelector(".hidden");

const closeBtnModalWindow = document.querySelector(".hidden__Btn");

const modalWindowAll = document.querySelectorAll(".modalbtn");
const modalWindowBtn1 = document.querySelectorAll(".modalbtn")[0];
const modalWindowBtn2 = document.querySelectorAll(".modalbtn")[1];
const modalWindowBtn3 = document.querySelectorAll(".modalbtn")[2];


for( let i = 0; i < modalWindowAll.length; i ++){
    modalWindowAll[i].addEventListener("click", () => {
        console.log(modalWindowAll[i].textContent);
        modalWindow.style.display = "block";
    }); 
    
}

closeBtnModalWindow.addEventListener("click",() => {
    modalWindow.style.display = "none";
});