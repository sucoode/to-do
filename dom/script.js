// const title=document.querySelector("h4");
// title.innerHTML="1. Sleep"
// console.log(title.innerHTML)
function removeElement(index){
  const element = document.getElementById(index);
  //console.log(element)
  element.parentNode.removeChild(element);
}
let cnt=3;
function addElement(){
  const inputEl=document.querySelector("input");
  const value=inputEl.value;
  const item=document.createElement("div")
  const item1=document.createElement("li")
  const button=document.createElement("button")
  item.id=cnt;
  button.textContent="Delete";
  button.addEventListener("click",()=>{
    const ele=document.getElementById(item.id);
    ele.parentNode.removeChild(ele);
  })
  item1.innerHTML=value
  item.append(item1)
  item.append(button)
  console.log(item)
  document.getElementById("to-do-list").append(item);
  inputEl.value="";
  cnt++;
}

