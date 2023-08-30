var btnadd=document.getElementById("add");//to perform add function
var btnup=document.getElementById("update");
var btndel=document.getElementById("delete")
var first=document.getElementById("item1");
var todo=document.getElementById("todo")
var content='';
todo.addEventListener('input',function(e){
content=e.target.value;
})
todo.addEventListener('keyup',function(e){
    if(e.keyCode ===13){
        alert("add todo");
        addlist();
    }
});
function addnew(){
    var newList=document.createElement('li');// to create li elements
    var textnode=document.createTextNode(content);
    newList.appendChild(textnode)
newList.id="item" +(list.childElementCount);
list.append(newList,first);
todo.value='';
content='';
return newList;
}
var list=document.getElementById("todolist");
// btnadd.addEventListener("click",
function addlist() {
    if(content!=null && content!='' && content!=undefined){
    alert("add todo");
   var newList=addnew();
    }
    else{
        alert("please enter details")
    }
}
// console.log(list.childElementCount)
btnadd.addEventListener("click",addlist);
btnup.addEventListener("click",function(){
    var firstElement=list.firstElementChild;
    if(content!=null && content!='' && content!=undefined){
        var newList=addnew();
list.replaceChild(newList,firstElement);
    }
})
btndel.addEventListener("click",function(){
    var firstElement=list.firstElementChild;   
list.removeChild(firstElement);
})
