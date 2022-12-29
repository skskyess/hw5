window.onload=function(){

let addbutton = document.querySelector("#addTask")
addbutton.addEventListener("click",()=> {
    let taskText = document.querySelector("#taskText").value;
    // let postBlock = document.querySelector(".posts");
    // function createPost(){

    //     let text = document.querySelector("#textPost").value;
    //     let newPost = document.createElement("span");
    //     newPost.textContent = text;
    //     postsBlock.append(newPost); 
    // }
    let b = document.querySelector("#addTask").value;
    let removeImg = document.createElement('img');
    removeImg.src="trash.jfif";
    removeImg.classList.add('removeBut');
    removeImg.id = 'remove';

    let removeBut = document.createElement('BUTTON');
    removeBut.id = 'delete';
    removeBut.addEventListener('click', (event) => {
        console.log(event.target);
        let parent = event.target.parentNode;
        console.log(parent);
        let grandParent = parent.parentNode;
        console.log(grandParent);
        //grandParent.removeChild(parent);
        let grandGrandParent = grandParent.parentNode;
        console.log(grandGrandParent);
        grandGrandParent.removeChild(grandParent);
        //document.querySelector(".dobavit").removeChild(grandParent);
    });
    removeBut.appendChild(removeImg);
    let newTask = document.createElement("div");
    newTask.innerHTML = `
    <h1>${taskText}</h1>
    <input type="checkbox" id="checkbox"/>
    <button id='redact'><img src="редактор.png" class="removeBut" id='remove'></button>
    `;
    newTask.appendChild(removeBut);
    let block = document.querySelector(".dobavit");
    block.appendChild(newTask);


    
}
);
}
//     let addbutton = document.querySelector("#addTask")
// addbutton.addEventListener("click",()=> {
//     let taskText = document.querySelector("#taskText").value;

// })
