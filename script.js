

const modalWindow = document.querySelector(".hidden"); // Modal Window
const closeBtnModalWindow = document.querySelector(".hidden__Btn"); // Close Window Button
const overlay = document.querySelector(".hidden__overlay");

const modalWindowAll = document.querySelectorAll(".modalbtn");
const modalWindowBtn1 = document.querySelectorAll(".modalbtn")[0];
const modalWindowBtn2 = document.querySelectorAll(".modalbtn")[1];
const modalWindowBtn3 = document.querySelectorAll(".modalbtn")[2];


for( let i = 0; i < modalWindowAll.length; i ++){ // All Modal Buttons
    modalWindowAll[i].addEventListener("click", () => {
        console.log(modalWindowAll[i].textContent);
        modalWindow.style.display = "block";
    }); 
    
}


const closeModalWindow = function(){
    modalWindow.style.display = "none";
}

closeBtnModalWindow.addEventListener("click", closeModalWindow); // Close Modal Window by clicking "Submit" buttom

overlay.addEventListener("click", closeModalWindow); //  Close Modal Window by clicking on overlay

document.addEventListener("keydown", (event) => {
    //console.log(event.key);

    if (event.key === "Escape"){
        closeModalWindow();
    }
})


