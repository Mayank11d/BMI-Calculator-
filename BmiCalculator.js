const form=document.querySelector('#id-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const height = parseInt(document.querySelector('#Height').value);
    const weight = parseInt(document.querySelector('#Weight').value);
    const answer = document.querySelector('#result');
    if (isNaN(height) || height <= 0) {
        answer.innerHTML = `Please provide a valid height`;
    } else if (isNaN(weight) || weight <= 0) {
        answer.innerHTML = `Please provide a valid weight`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        answer.innerHTML = `<p>Your BMI is <span>${bmi}</span></p>`;
    }
});
