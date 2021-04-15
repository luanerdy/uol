function verifyPrivacy(messages) {
	const messagesToSee = messages.filter((message) => {
		let permission = (message.type === 'message' ||
		message.to === username ||
		message.from === username ||
		message.to === 'Todos');

        return permission;
	});

    return messagesToSee;
}
