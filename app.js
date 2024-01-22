const fill =document.querySelector(".fill");
const empties=document.querySelectorAll(".empty");


fill.addEventListener("dragstart", dragStart)  
    function dragStart(){
this.className += " hold"
setTimeout(()=>(this.className = "invisible"),0)
console.log("dragStart");
    }


fill.addEventListener("dragend", dragEnd)

    function dragEnd(){

        this.className="fill"
    }

    for(const empty of empties){
        empty.addEventListener("dragover",dragOver)
        empty.addEventListener("dragleave",dragLeave)
        empty.addEventListener("dragenter",dragEnter)
        empty.addEventListener("drop",dragDrop)
    }

    function dragOver(e){
        e.preventDefault()

    }

    function dragLeave(){
        this.className= " empty"

    }

    function dragEnter(e){
        e.preventDefault()
        this.className+=" hover"
        
    }

    function dragDrop(){
        this.className= "empty"
        this.append(fill)
    }

   
