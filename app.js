// selectors
const headingInput = document.getElementById('heading-input')
const mainInput = document.getElementById('main-input')
const createBtn = document.getElementById('create-btn')
const container = document.querySelector('.container')
const card = document.querySelector('.card-list')


let nowDate = new Date(); 
let date = nowDate.getFullYear()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getDate();

// events
document.addEventListener('DOMContentLoaded', getNotes)
createBtn.addEventListener('click', createNote)
card.addEventListener('click', deleteNote)

//functions
function createNote() {
    if(!mainInput.value) {
        alert('Please fill in the form')
        return false
    }
    //create div card
    const cardDiv = document.createElement('div')
    cardDiv.classList.add("card", "shadow", "mb-3", "mt-2")
    cardDiv.style.maxWidth = '100%'
    card.appendChild(cardDiv)
    //create div card-header
    const cardHeader = document.createElement('div')
    cardHeader.classList.add("card-header")
    cardHeader.innerText = date
    cardDiv.appendChild(cardHeader)
    cardHeader.style.display = 'flex';
    cardHeader.style.justifyContent = 'space-between';
    cardHeader.style.alignItems = 'center';
    //create delete button
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add("btn", "btn-outline-dark", "btn-delete")
    deleteBtn.innerText = "Delete"
    cardHeader.appendChild(deleteBtn)    
    // create div card -body
    const cardBody = document.createElement('div')
    cardBody.classList.add("card-body")
    cardDiv.appendChild(cardBody)
    //create h4 card-title
    const cardTitle = document.createElement('h4')
    cardTitle.classList.add('card-title')
    cardTitle.innerText = headingInput.value
    cardBody.appendChild(cardTitle)
    // create p card-text
    const cardText = document.createElement('p')
    cardText.classList.add("card-text")
    cardText.innerText = mainInput.value
    cardBody.appendChild(cardText)

    //add to localStorage
    saveLocalNotes()

    headingInput.value = ""
    mainInput.value = ""
}

function deleteNote(e) {
    const item = e.target
    //delete note
    if (item.classList[2] === "btn-delete"){
        const note = item.parentElement.parentElement
        removeLocalNotes(note)
        note.remove()
    }
}


//Local storage

let myObj = {
    date: date,
    title: headingInput.value,
    text: mainInput.value
}

function saveLocalNotes() {
    //check if there is already a list there
    let notes
    if(localStorage.getItem('notes') === null){
        notes = []
    } else {
        notes = JSON.parse(localStorage.getItem('notes'))
    }

    let myObj = {
        date: date,
        title: headingInput.value,
        text: mainInput.value
    }
      notes.push(myObj);
      localStorage.setItem("notes", JSON.stringify(notes));
}




function getNotes() {
    let notes
    if(localStorage.getItem('notes') === null){
        notes = []
    } else {
        notes = JSON.parse(localStorage.getItem('notes'))
    }
    notes.forEach((myObj) => {
        //create div card
        const cardDiv = document.createElement('div')
        cardDiv.classList.add("card", "shadow", "mb-3", "mt-2")
        cardDiv.style.maxWidth = '100%'
        card.appendChild(cardDiv)
        //create div card-header
        const cardHeader = document.createElement('div')
        cardHeader.classList.add("card-header")
        cardHeader.innerText = myObj.date
        cardDiv.appendChild(cardHeader)
        cardHeader.style.display = 'flex';
        cardHeader.style.justifyContent = 'space-between';
        cardHeader.style.alignItems = 'center';
        //create delete button
        const deleteBtn = document.createElement('button')
        deleteBtn.classList.add("btn", "btn-outline-dark", "btn-delete")
        deleteBtn.innerText = "Delete"
        cardHeader.appendChild(deleteBtn)    
        // create div card -body
        const cardBody = document.createElement('div')
        cardBody.classList.add("card-body")
        cardDiv.appendChild(cardBody)
        //create h4 card-title
        const cardTitle = document.createElement('h4')
        cardTitle.classList.add('card-title')
        cardTitle.innerText = myObj.title
        cardBody.appendChild(cardTitle)
        // create p card-text
        const cardText = document.createElement('p')
        cardText.classList.add("card-text")
        cardText.innerText = myObj.text
        cardBody.appendChild(cardText)
    })

}

function removeLocalNotes(note){
    let notes
    if(localStorage.getItem('notes') === null){
        notes = []
    }else{
        notes = JSON.parse(localStorage.getItem('notes'))
    }
    const noteIndex = note.children[0].innerText
    notes.splice(notes.indexOf(noteIndex), 1)
    localStorage.setItem('notes', JSON.stringify(notes))
}