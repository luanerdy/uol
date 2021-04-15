function getParticipants() {
    let participants = [];
    axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/uol/participants')
        .then(response => {
            participants = response.data;
            renderParticipants(participants);
        })
        .catch(error => {
            console.error(error.response);
        });
}
