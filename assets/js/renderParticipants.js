function renderParticipants(participants) {
    const participantsDiv = document.querySelector('.participants');
    participantsDiv.innerHTML = `
        <div class="selected">
            <div>
                <ion-icon name="people"></ion-icon>
                <span>Todos</span>
            </div>
            <ion-icon name="checkmark"></ion-icon>
        </div>`;
    participants.forEach(participant => {
        participantsDiv.innerHTML += `
            <div>
                <div>
                    <ion-icon name="person-circle"></ion-icon>
                    <span>${participant.name}</span>
                </div>
                <ion-icon name="checkmark"></ion-icon>
            </div>`;
    });
}
