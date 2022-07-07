import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = "feedback-form-state";

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmitBtn);

onShowSaveValue()

const formData = {};

function onInput(evt) {
    const mail = evt.target.value;
    const message = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ mail, message }))
}
function onSubmitBtn(evt) {
    evt.preventDefault();

    formData[evt.target.email.name] = evt.target.email.value
    formData[evt.target.message.name] = evt.target.message.value
    console.log(formData)
// console.log(evt.target.email.name)
// console.log(evt.target.email.value)

    evt.currentTarget.reset()
    localStorage.removeItem(STORAGE_KEY)
}
function onShowSaveValue() {
    const getLocal = localStorage.getItem(STORAGE_KEY)
    const getPars = JSON.parse(getLocal)

    if (getPars) {
        email.value = getPars.mail;
        message.value = getPars.message;
    }
}