const addBook = document.querySelector(".addBookBtn");

const submitBook = document.querySelector(".add");

const modal = document.querySelector(".modalContainer");

const modalTitle = document.querySelector("#title");

const modalAuthor = document.querySelector("#author");

const modalPages = document.querySelector("#pages");

const modalCheckBox = document.querySelector("#checkbox");

const library = document.querySelector(".libraryContent");

let myLibrary = [];



const hideModal = () => {
    modal.style.display = "none";
};

const showModal = () => {
    modal.style.display = "block";
    const cancel = document.querySelector(".cancel");
    cancel.addEventListener("click", (e) => {
        e.preventDefault();
        hideModal();
    });
};

addBook.addEventListener("click", showModal);



function Book(title, author, pages, read) {
    (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

submitBook.addEventListener("click", addBookToLibrary);

function addBookToLibrary(e) {
    e.preventDefault();
    // do stuff here

    let bookTitle = modalTitle.value;
    let bookAuthor = modalAuthor.value;
    let bookPages = modalPages.value;
    let bookStatus = modalCheckBox.checked;

    // Display error message if inputs are empty

    if (bookTitle === "" || bookAuthor === "" || bookPages === "") {
        const errorMessage = document.querySelector(".errorModal");
        hideModal();
        errorMessage.style.display = "block";
        const errorBtn = document.querySelector(".errorBtn");
        errorBtn.addEventListener("click", () => {
            errorMessage.style.display = "none";
            showModal();
        });
    } else {
        let newBook = new Book(bookTitle, bookPages, bookAuthor, bookStatus);
        // console.log(newBook)
        myLibrary.push(newBook);

        hideModal();
        render();
    }

    function render() {
        library.innerHTML = " ";

        for (let i = 0; i < myLibrary.length; i++) {
            if (myLibrary[i].read) {
                library.innerHTML += `
                <div data-card="card-${i}" class="card">
                    <p><span class="cardContent">Title: </span> ${myLibrary[i].title} </p>
                    <p><span class="cardContent">Author: </span> ${myLibrary[i].author} </p>
                    <p> <span class="cardContent">Pages: </span> ${myLibrary[i].pages}</p>
                    <p><span class="cardContent read">Read: </span> ${myLibrary[i].read}
                    <!-- <a href="#"><i class="fas fa-check" ></i></a>-->
                    </p>

                    <div data-delete="delete-${i}" class="delete">
                    <a href="#"><i class="fas fa-trash-alt"></i></a>
                    </div>

                </div>

                `;
            } else {
                library.innerHTML += `
                <div data-card="card-${i}" class="card">
                    <p><span class="cardContent">Title: </span> ${myLibrary[i].title} </p>
                    <p><span class="cardContent">Author: </span> ${myLibrary[i].author} </p>
                    <p> <span class="cardContent">Pages: </span> ${myLibrary[i].pages}</p>
                    <p><span class="cardContent notRead">Read: </span> ${myLibrary[i].read}
                    <!-- <a href="#" "><i class="fas fa-times"></i></a>-->
                    </p>


                <div data-delete="delete-${i}" class="delete">
                    <a href="#"><i class="fas fa-trash-alt"></i></a>
                </div>

                </div>
                `;
            }


            function del(e) {

                // console.log(e.currentTarget.dataset.delete)
                const clickTarget = e.currentTarget.dataset.delete;
                const cardToDelete = clickTarget.split('-')[1];
                myLibrary.splice(parseInt(cardToDelete), 1);
                // const card = document.querySelector('.card')
                // card.remove()
                render()

            }

            document.querySelectorAll('.delete').forEach((delBtn) => {
                delBtn.addEventListener("click", del)

            })



        }
    }

    // function filter(e) {
    //     const cards = document.querySelectorAll('.card')
    //     const filterTarget = e.target
    //     if (filterTarget.classList.contains('read')) {
    //         cards.forEach((card) => {

    //             if (card.classList.contains('read')) {
    //                 card.style.display = 'block'
    //             } else {
    //                 card.style.display = 'none'
    //             }

    //         })

    //     } else {

    //     }



    // }



    // const filterBtn = document.querySelectorAll('.filterBtn').forEach((filters) => {
    //     filters.addEventListener("click", filter);
    //     // console.log(filterBtn)
    // })


    modalTitle.value = "";
    modalAuthor.value = "";
    modalPages.value = "";
    modalCheckBox.checked = false;
}