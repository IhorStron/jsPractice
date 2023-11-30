// ---Calculator---

const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const sumbmitBtn = document.getElementById('submit');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multiplicationBtn = document.getElementById('multiplication');
const divisionBtn = document.getElementById('division');
let action = '+';

plusBtn.onclick = function () {
   action = '+'
}

minusBtn.onclick = function () {
   action = '-'
}

multiplicationBtn.onclick = function () {
   action = '*'
}

divisionBtn.onclick = function () {
   action = '/'
}

function printResult(result) {
   if (result < 0) {
      resultElement.style.color = 'red'
   } else {
      resultElement.style.color = 'green'
   }
   resultElement.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
   const num1 = Number(inp1.value)
   const num2 = Number(inp2.value)
   // return actionSymbol == '+' ? num1 + num2 : num1 - num2
   if (actionSymbol == '+') {
      return num1 + num2
   }

   if (actionSymbol == '-') {
      return num1 - num2
   }

   if (actionSymbol == '*') {
      return num1 * num2
   }

   if (actionSymbol == '/') {
      return num1 / num2
   }
}

sumbmitBtn.onclick = function () {

   const result = computeNumbersWithAction(input1, input2, action)
   printResult(result)
}
// ---/Calculator---


// ---Notes---

const inputElement = document.getElementById('title');
const createBtn = document.getElementById('create');
const listElement = document.getElementById('list');
// const notes = ['записати блок про масиви', 'розказати теорію обєктів']


// function render () {

//    // for (let i = 0; i < notes.length; i++) {
//    //    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
//    // }

//    for (let note of notes) {
//       listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
//    }
// }
// render()

// createBtn.onclick = function () {
//    if (inputElement.value.length === 0 ) {
//       return
//    }
//    // listElement.innerHTML = 
//    listElement.insertAdjacentHTML(
//    'beforeend',
//    getNoteTemplate(inputElement.value) 
// )
// inputElement.value = ``
// }

const notes = [{
   title: 'записати блок про масиви',
   completed: false,
},
{
   title: 'розказати теорію обєктів',
   completed: true,
},
]


function render() {


   listElement.innerHTML = ''
   if (notes.length === 0) {
      listElement.innerHTML = '<p>Немає елементів</p>'
   }

   for (let i = 0; i < notes.length; i++) {
      listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
   }
   //  for (let note of notes) {
   //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
   //  }
}
render()

createBtn.onclick = function () {
   if (inputElement.value.length === 0) {
      return
   }
   const newNote = {
      title: inputElement.value,
      completed: false,
   }
   // listElement.innerHTML = 
   //    listElement.insertAdjacentHTML(
   //    'beforeend',
   //    getNoteTemplate(newNote) 
   // )
   notes.push(newNote)
   render()
   inputElement.value = ``
}

listElement.onclick = function (event) {
   if (event.target.dataset.index) {
      const index = parseInt(event.target.dataset.index)
      const type = event.target.dataset.type

      if (type === 'toggle') {
         notes[index].completed = !notes[index].completed
      } else if (type === 'remove') {
         notes.splice(index, 1)
      }

      render()
   }
}


function getNoteTemplate(note, index) {
   return `
   <li class="list-group-item d-flex justify-content-between align-items-center">
               <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
               <span>
                  <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}" data-index="${index}" data-type="toggle">&check;</span>
                  <span class="btn btn-small btn-danger" data-type="remove" data-index="${index}">&times;</span>
               </span>  
            </li>
   `

}

// ---/Notes---


// ---Time---
let mode = 'time'
const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')

function bindMode(name) {
   return function () {
      mode = name
      update()
   }
}

fullBtn.onclick = bindMode('full')

dateBtn.onclick = bindMode('date')

timeBtn.onclick = bindMode('time')


// fullBtn.onclick = function() {
//    mode = 'full'
//    update()
// }

// dateBtn.onclick = function() {
//    mode = 'date'
//    update()
// }

// timeBtn.onclick = function() {
//    mode = 'time'
//    update()
// }


setInterval(update, 1000)
update()

function update() {
   output.textContent = format(mode)
}

function format(formatMode) {
   const now = new Date()

   switch (formatMode) {
      case 'time': return now.toLocaleTimeString()
      case 'date': return now.toLocaleDateString()
      case 'full': return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
      default:
         return now.toLocaleTimeString()
   }
}
// ---/Time---

// const list = document.querySelector('#list')

// async function start() {
//    try {
//       const resp = await fetch('https://jsonplaceholder.typicode.com/users')
//       const data = await resp.json()
//       render(data)
//    } catch (err) { }
// }

// function render(users = []) {
//    const html = users.map(toHTML).join('')
//    list.innerHTML = html
// }

// function toHTML(user) {
//    return `
//    <li class="list-group-item">${user.name}</li>
//    `
// }


// start()