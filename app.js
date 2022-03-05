// selectors
const headingInput = document.getElementById('heading-input')
const dateInput = document.getElementById('date-input')
const mainInput = document.getElementById('main-input')
const createBtn = document.getElementById('create-btn')
const container = document.querySelector('.container')

// events
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
    dateInput.value = ""
    // create div card -body
    const cardBody = document.createElement('div')
    cardBody.classList.add("card-body")
    cardDiv.appendChild(cardBody)
    //create h4 card-title
    const cardTitle = document.createElement('h4')
    cardTitle.classList.add('card-title')
    cardTitle.innerText = headingInput.value
    cardBody.appendChild(cardTitle)
    headingInput.value = ""
    // create p card-text
    const cardText = document.createElement('p')
    cardText.classList.add("card-text")
    cardText.innerText = mainInput.value
    cardBody.appendChild(cardText)
    mainInput.value = ""
}

