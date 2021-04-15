let participantsDiv = document.querySelector('.participants');
let selecionado = null;
function renderParticipants(participants) {
    participantsDiv.innerHTML = `
        <div data-name="Todos">
            <div>
                <ion-icon name="people"></ion-icon>
                <span>Todos</span>
            </div>
            <ion-icon name="checkmark"></ion-icon>
        </div>`;
    participants.forEach(participant => {
        participantsDiv.innerHTML += `
            <div data-name=${participant.name}>
                <div>
                    <ion-icon name="person-circle"></ion-icon>
                    <span>${participant.name}</span>
                </div>
                <ion-icon name="checkmark"></ion-icon>
            </div>`;
    });
    const participantsList = participantsDiv.children;
    addListeners(participantsList);
    if(selecionado !== null) {
        const selecionadoDiv = document.querySelector(`[data-name=${selecionado}]`);
        selecionadoDiv.classList.add('selected')
    }
}
