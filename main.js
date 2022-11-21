const openBtns = document.querySelectorAll("#open");
const boxs = document.querySelectorAll(".box");
const caretUp = document.querySelector(".fa-caret-up");
const caretDown = document.querySelector(".fa-caret-down");

boxs.forEach(box =>{
    box.addEventListener("click", () =>{
        
        box.classList.toggle("active")
        
    })
})


/*
openBtns.forEach(btn =>{
    btn.addEventListener("click", () =>{
        
        boxs.forEach(box => {
            box.classList.toggle("active")
        })
        
    })
})
*/


