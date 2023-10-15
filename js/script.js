//target element

let selecteditems = document.querySelector(".items")
let lessitems = document.querySelector(".less-btn")
let additems = document.querySelector(".more-btn")

//experemets

additems.addEventListener("click", ()=>{
    let add = selecteditems.innerHTML
    if(add<10){
        selecteditems.innerHTML = parseInt(add)+1
        additems.classList.remove("cursor-disabled")
        additems.classList.add("good-bid-btn")
        // selecteditems.classList.remove("cursor-disabled")
        lessitems.classList.remove("cursor-disabled")
        selecteditems.classList.add("good-bid")
    }
    
    else if(add>9){
        additems.classList.add("cursor-disabled")
        additems.classList.remove("good-bid-btn")
        selecteditems.classList.remove("good-bid")
        selecteditems.classList.add("bad-bid")
    }
})

lessitems.addEventListener("click", ()=>{
    let sub = selecteditems.innerHTML
    if(sub>0){
        selecteditems.innerHTML = parseInt(sub) - 1
        // lessitems.classList.remove("cursor-disabled") 
        additems.classList.add("good-bid-btn")
        selecteditems.classList.add("good-bid")
    }

    else if(sub<1){
       lessitems.classList.add("cursor-disabled")
       additems.classList.remove("good-bid-btn")
       additems.classList.remove("cursor-disabled")
       selecteditems.classList.remove("good-bid")
       selecteditems.classList.add("bad-bid")
    }
})