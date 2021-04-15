function keepConnection() {
    const data = {
        name: username
    };

    axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/uol/status', data)
        .then(response => {})
        .catch(error => {
            alert('Erro!');
            location.reload();
            console.error(error.response);
        });
}
