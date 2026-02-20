/*
const myArray = [10, 20, 30];

myArray[3] = 40
console.log(myArray)

console.log(myArray.push(300))
console.log(myArray.splice(0, 2))
console.log(myArray) */


let ToDoList = JSON.parse(localStorage.getItem('ToDo'))
console.log(ToDoList)
if (!ToDoList) {
 ToDoList = []
}
else {RenderList()}

function AddToDo() {
 const Inputter = document.querySelector(`.ToDoInput`)
 const DateInputter = document.querySelector('.DateInput')
     if (Inputter.value.trim() !== '')
    {
    
    ToDoList.push({task: Inputter.value, date: DateInputter.value || 'No date'})
    Inputter.value = ''
    RenderList()
}
}

function RenderList() {
    const TheDiv = document.querySelector('.List')
   
    let FullHtml = ''

     for (let i = 0; i < ToDoList.length; i++) {
        FullHtml = FullHtml + `
        <div> ${ToDoList[i].task} </div> 
         <div>${ToDoList[i].date}</div> 
        
        <button class="DeleteTask" onclick="
            ToDoList.splice(${i}, 1);
            RenderList();
        ">Delete</button>`
        
     };
    localStorage.setItem("ToDo", JSON.stringify(ToDoList))
     TheDiv.innerHTML = FullHtml

    

};
    

/* const table = ['easy', 'peasy', 'lemon squeazy']

for (let i = 0; i < table.length; i+=1) 
    {console.log(table[i])} 

const array = [1,1,3]
let total = 0

for (i = 0; i< array.length; i++)
{
    total+= array[i]
}
console.log(total) */


