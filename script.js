let iTask = ["Wash the dishes", "Go to the back", "Do my homework"];
  
function itemName(){
    console.log("Item added");

    let toDo=prompt("Enter a task:");
    
    iTask.push(toDo);

    displayItem();
}
function displayItem(){
    document.getElementById("itemDisplay").innerHTML="";
    
    for(let x=0;x<iTask.length;x++){
        document.getElementById("itemDisplay").innerHTML+=`
        <li id="${x}">${iTask[x]}<button onclick="deleteItem(${x});">Delete</button></li>
        `;   
    }
    
}
displayItem();

function deleteItem(id){
    document.getElementById(id).remove();
    iTask.splice(id,1);
}
