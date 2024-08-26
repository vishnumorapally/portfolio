const menu = document.querySelector(".tags")


const tags = document.querySelectorAll(".tg")

const createbtn = (name)=>{
    let btn = document.createElement("button")
    btn.innerHTML = name
    btn.id = "new"
    menu.append(btn)

}

const web = ()=>{
    let a = ["HTML","CSS","JavaScript","React JS"]
    a.forEach((name)=>{
        createbtn(name)
    })
}

const program = ()=>{
    let a = ["PYTHON","JAVA"]
    a.forEach((name)=>{
        createbtn(name)
    })
}

const operating = ()=>{
    let a = ["WINDOWS","LINUX"]
    a.forEach((name)=>{
        createbtn(name)
    })
}

const tools = ()=>{
    let a = ["GIT"]
    a.forEach((name)=>{
        createbtn(name)
    })
}

const database = ()=>{
    let a = ["MySQL","MongoDB"]
    a.forEach((name)=>{
        createbtn(name)
    })
}

const removealltags = ()=>{
    let rweb = document.querySelectorAll(".w")
    rweb.forEach((r)=>{
        menu.removeChild(r)
    })
    let rpro = document.querySelectorAll(".p")
    rpro.forEach((r)=>{
        menu.removeChild(r)
    })
    let rope = document.querySelectorAll(".o")
    rope.forEach((r)=>{
        menu.removeChild(r)
    })
    let rtoo = document.querySelectorAll(".t")
    rtoo.forEach((r)=>{
        menu.removeChild(r)
    })
    let rdat = document.querySelectorAll(".d")
    rdat.forEach((r)=>{
        menu.removeChild(r)
    })
    let rnew = document.querySelectorAll("#new")
    rnew.forEach((r)=>{
        menu.removeChild(r)
    })
}

function removeactive(){
     tags.forEach((e)=>{
        e.classList.remove("active")
    })
}
tags.forEach((e)=>{
    e.addEventListener("click",()=>{
        let btn = e.getAttribute("id")
        removeactive()
        removealltags()
        e.classList.add("active")

        if (btn === "web"){
            web()
        }
        else if(btn ===  "program"){
            program()
        }
        else if(btn === "operating"){
            operating()
        }
        else if(btn === "tools"){
            tools()
        }
        else if (btn === "database"){
            database()
        }
        else if(btn === "all"){
            web()
            program()
            operating()
            tools()
            database()
        }
    })

})





