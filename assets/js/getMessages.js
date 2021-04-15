function getMessages() {
    let messages = [];
    axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/uol/messages')
        .then(response => {
            messages = response.data;
            renderMessages(messages);
        })
        .catch(error => {
            console.error(error.response);
        });
}
