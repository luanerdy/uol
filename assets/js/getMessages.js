let messages = [];
function getMessages() {
    axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/uol/messages')
        .then(response => {
            messages = response.data;
            renderMessages();
        })
        .catch(error => {
            console.error(error.response);
        });
}