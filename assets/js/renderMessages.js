function renderMessages(messages) {
	const chat = document.querySelector('.chat');
	chat.innerHTML = '';
	messages.forEach((message) => {
		if (message.type === 'status') {
			chat.innerHTML += `
                <div class="msg msg-status">
                    <p>
                        <span class="time">(${message.time})</span>
                        <strong class="user">${message.from}</strong> ${message.text}
                    </p>
                </div>`;
		} else if (message.type === 'message') {
			chat.innerHTML += `
                <div class="msg msg-public">
                    <p>
                        <span class="time">(${message.time})</span>
                        <strong class="user">${message.from}</strong> para
                        <strong class="user">${message.to}</strong>: ${message.text}
                    </p>
                </div>`;
		} else if (message.type === 'private_message') {
			chat.innerHTML += `
                <div class="msg msg-private">
                    <p>
                        <span class="time">(${message.time})</span>
                        <strong class="user">${message.from}</strong> reservadamente para
                        <strong class="user">${message.to}</strong>: ${message.text}
                    </p>
                </div>`;
		}
	});
    chat.scrollTo(0, chat.scrollHeight);
}
