const menu = document.querySelector(".tag")


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





// nav bar

const closebtn = document.getElementById("close");
closebtn.style.display = "none";

const menubtn = document.getElementById("menu");

const items = document.getElementById("it")


menubtn.addEventListener("click",()=>{
    menubtn.style.display = "none";
    closebtn.style.display = "block";
    items.style.display = "block";
})

closebtn.addEventListener("click",()=>{
    menubtn.style.display = "block";
    closebtn.style.display = "none";
    items.style.display = "none";
})



// sort skill

const filter = document.getElementById("filter")
const closefilter = document.getElementById("close-skils")
const menuskills = document.getElementById("menu-skills")
const options = document.querySelectorAll(".tg")
const heading = document.getElementById("heading")



filter.addEventListener("click",()=>{
    menuskills.style.display = "block";
    closefilter.style.display = "block";
    filter.style.display = "none";
    heading.style.display = "none";
    options.forEach((op)=>{
    op.addEventListener("click",()=>{
        te=""
        let opte = op.getAttribute("id")
        if(opte==="all") te="All";
        else if(opte==="web") te="Web Development";
        else if(opte==="program") te="Programming apps";
        else if(opte==="operating") te="Opreating Systems";
        else if(opte==="tools") te="Tools";
        else te="Databases"
        menuskills.style.display = "none";
        closefilter.style.display = "none";
        filter.style.display = "block";
        heading.innerHTML = te;
        heading.style.display = "block";
        
    })
})
})

closefilter.addEventListener("click",()=>{
    menuskills.style.display = "none";
    closefilter.style.display = "none";
    filter.style.display = "block";
    heading.style.display = "block";
})

