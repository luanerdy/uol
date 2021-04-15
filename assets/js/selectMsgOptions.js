let options = {
	to: 'Todos',
	type: 'message',
};
description.textContent =
			options.type === 'message'
				? `Enviando para ${options.to} (Publicamente)`
				: `Enviando para ${options.to} (reservadamente)`;

function addListeners(participants) {
    const types = document.querySelector('.types').children;
    const triggers = [...participants, ...types];

    triggers.forEach((trigger) => {
        trigger.addEventListener('click', selectMsgOptions, true);
    });
}



function selectMsgOptions(event) {
	removeSelected(event.currentTarget.parentElement.classList[1]);
	event.currentTarget.classList.add('selected');
	const selectedDivs = document.querySelectorAll('.selected');
    selecionado = selectedDivs[0].dataset.name;
	if (selectedDivs[1] !== null) {
		options.to = selectedDivs[0].dataset.name;
		options.type = selectedDivs[1].dataset.type;
		description.textContent =
			options.type === 'message'
				? `Enviando para ${options.to} (Publicamente)`
				: `Enviando para ${options.to} (reservadamente)`;
	}
}

function removeSelected(element) {
    let kids = document.querySelector(`.${element}`).children;
    children = [...kids];
	children.forEach((child) => {
		child.classList.remove('selected');
	});
}
