// selectors
const headingInput = document.getElementById('heading-input')
const dateInput = document.getElementById('date-input')
const mainInput = document.getElementById('main-input')
const createBtn = document.getElementById('create-btn')
const container = document.querySelector('.container')

// events
document.addEventListener('DOMContentLoaded', getNotes)
createBtn.addEventListener('click', createNote)

//functions
function createNote() {
    //create div card
    const cardDiv = document.createElement('div')
    cardDiv.classList.add("card", "border-primary", "mb-3", "mt-2")
    cardDiv.style.maxWidth = '100%'
    container.appendChild(cardDiv)
    //create div card-header
    const cardHeader = document.createElement('div')
    cardHeader.classList.add("card-header")
    cardHeader.innerText = dateInput.value
    cardDiv.appendChild(cardHeader)
    
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

    dateInput.value = ""
    headingInput.value = ""
    mainInput.value = ""
}


//Local storage

let myObj = {
    date: dateInput.value,
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
        cardDiv.classList.add("card", "border-primary", "mb-3", "mt-2")
        cardDiv.style.maxWidth = '100%'
        container.appendChild(cardDiv)
        //create div card-header
        const cardHeader = document.createElement('div')
        cardHeader.classList.add("card-header")
        cardHeader.innerText = myObj.date
        cardDiv.appendChild(cardHeader)
        
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
