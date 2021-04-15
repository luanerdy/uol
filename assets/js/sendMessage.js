let key = 'Enter';
function sendMessage(event) {
    if(event.type === 'keyup') key = event.key;

    if(key === 'Enter'){
        const message = document.querySelector('.textfield input');
    let data = {
        from: username,
        to: options.to,
        text: message.value,
        type: options.type
    }
    axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/uol/messages', data)
        .then(response => {
            message.value = '';
        })
        .catch(error => {
            console.error(error.response);
        });
    }

    key = 'Enter';
}
