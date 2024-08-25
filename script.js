const menu = document.querySelector(".tags")


const tags = document.querySelectorAll(".tg")

const createbtn = (name)=>{
    let btn = document.createElement("button")
    console.log(name)
    menu.append(btn)
    console.log(menu)
}

function removeactive(){
     tags.forEach((e)=>{
        e.classList.remove("active")
    })
}
tags.forEach((e)=>{
    e.addEventListener("click",()=>{
        let btn = e.getAttribute("id")
        console.log(btn)
        removeactive()
        e.classList.add("active")
       let name = "#"+btn
       createbtn(btn)
    })

})

