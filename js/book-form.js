import { addBook } from "./book-storage.js";

const form = document.getElementById("addBooksForm");

const readBookForm = (onSuccess) => (event) => {
    event.preventDefault()
    const book = {
        title: document.getElementById('bookTitle').value,
        isbn: document.getElementById('isbnNumber').value,
        inMyPossesion: event.target.querySelector('input[name="in-my-possession"]:checked').value === "Yes"
    }
    addBook(book);
    onSuccess();
    form.reset();
};

const initFrom = (onSuccess) => form.addEventListener("submit", readBookForm(onSuccess));
export default initFrom;


/* const validateForm = (onSuccess) => (event) => {
    event.preventDefault();
    const inputs = [
      ...Array.from(event.target.querySelectorAll("input")), 
    ];

    const formIsValid = inputs
        .map(validateInput)
        .every(valid => valid);  
  
    if(formIsValid){
      onSuccess();
      event.target.closest("form").reset();
    }
  }

  const validateInput = (inputElement) => {
    const {name, value, required, type, checked} = inputElement;
   
    let errorMessages = [];
    if(required){
      errorMessages.push(validateRequired(requiredCheckValue(value, checked, type), name));
    }
  
    const errorMessage = errorMessages.join("")
    document.getElementById(`${name}Error`).innerHTML = errorMessage;
    if (errorMessage === ""){
        inputElement.classList.remove("invalid");
        return true;
    } else {
        inputElement.classList.add("invalid");
        return false;
    };
  }

  const addValidationToForm = (onSuccess) => {
    const form = document.getElementById(addBooksForm);
    const inputs = [
      ...form.querySelectorAll("input"), 
    ]
  
    form.addEventListener("submit", validateForm(onSuccess));
    inputs.forEach(input => input.addEventListener("input", validateInputEventHandler));
  }
  */ 