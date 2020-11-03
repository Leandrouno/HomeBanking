//Variable

const btnSubmit = document.querySelector('.btn-submit');
const url = 'localHost';

btnSubmit.addEventListener('click', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    document.querySelector('form[name="formulario"]')
    try {
        const userData = await fetch(url + '/login', { method: 'POST', body: JSON.stringify({ username, password }) });
    } catch (err) {
        alert('Los datos son incorrectos');
    }

})