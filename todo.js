var btnadd=document.getElementById("add");//to perform add function
var first=document.getElementById("item1");
var todo=document.getElementById("todo")
var content='';
todo.addEventListener('input',function(e){
content=e.target.value;
})
todo.addEventListener('keyup',function(e){
    if(e.keyCode ===13){
        addlist();
    }
});
var list=document.getElementById("todolist");
// btnadd.addEventListener("click",
function addlist() {
    if(content!=null && content!='' && content!=undefined){
    alert("add todo");
    var newList=document.createElement('li');// to create li elements
     var textnode=document.createTextNode(content);
     newList.appendChild(textnode)
newList.id="item" +(list.childElementCount);
list.insertBefore(newList,first);
todo.value='';
content='';
    }
    else{
        alert("please enter details")
    }
}
// console.log(list.childElementCount)
btnadd.addEventListener("click",addlist);