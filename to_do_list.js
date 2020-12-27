function add(){
    let task_to_add=document.getElementById('task').value;
    console.log(task_to_add, "added to list");
    if(task_to_add==''){
        alert("Please type something");
    }
    else{
    let x=document.createElement('li');                
var textnode = document.createTextNode(task_to_add); 
delete_button=document.createElement('button');
delete_button.innerText="Delete this task" ;
delete_button.style.margin="15px";
delete_button.addEventListener('click',()=>{
    let temp=confirm("Do you want to delete");
    if(temp==true)
    document.getElementById('list').removeChild(x);
})
x.appendChild(textnode);
x.appendChild(delete_button);
    document.getElementById('list').appendChild(x);
}
}

