function getDataFromForm(){
    const form = document.getElementById('form');
    const firstName = form.querySelector('[name="firstName"]'),
        age = form.querySelector('[name="age"]'),
        surname = form.querySelector('[name="surname"]');
    const data = {
        firstName: firstName.value,
        surname: surname.value,
        age: age.value
    };
    alert(`${data.firstName} ${data.surname}\n${data.age}`);
}
