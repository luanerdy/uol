let username;
const form = document.querySelector('.login form');
form.addEventListener('submit', event => {
    event.preventDefault();
    enterRoom();
    hideLogin(); 
})

function enterRoom() {
    const input = document.querySelector('.login input');
    username = input.value;
    const data = {
        name: username
    };

    axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/uol/participants', data)
        .then(response => {
            console.log('Conectado com sucesso');
            setTimeout(hideLoader, 1500);
        })
        .catch(error => {
            if(error.response.status === 409) {
                console.log('Nome de usuário indisponível');
            }
        });
}

function hideLogin() {
    const loginScreen = document.querySelector('.login');
    loginScreen.classList.add('hidden');
}

function hideLoader() {
    const loader = document.querySelector('.loading');
    loader.classList.add('hidden');
}