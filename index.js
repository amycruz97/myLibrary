const addBtn = document.querySelector('.addBtn')

const submitBook = document.querySelector('.add')

const modal = document.querySelector('.modalContainer')

const title = document.querySelector('#titles')

const authors = document.querySelector('#authors')

const pages = document.querySelector('#pages')

const isRead = document.querySelector('#checkbox')


const showModal = () => {
    modal.style.display = 'block'
}

const hideModal = () => {
    modal.style.display = 'none'
    const cancel = document.querySelector('.cancel')
    cancel.addEventListener('click', (e) => {
        e.preventDefault()
        hideModal()

    })
}

addBtn.addEventListener("click", showModal);



function Book(title, author, pages, isRead) {
    // the constructor...

    this.title = tittle
    this.author = author
    this.pages = pages
    this.isRead = isRead
}





let myLibrary = [];