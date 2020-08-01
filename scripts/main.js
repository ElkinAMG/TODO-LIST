function toObject(task) {
    let text = document.createElement('article');

    text.setAttribute('class', 'task');
    text.appendChild(document.createElement('p'));
    text.children[0].textContent = task;

    text.addEventListener('click', (e) => {

	text.classList.toggle('deleted');
	setTimeout(() => {
	    localStorage.removeItem(localStorage.key(task));
	    text.remove()
	}, 300);

    })

    return text;
}

function add_task(task, container, storage)
{

    let output = "";
    const validator = (txt) => {
	let prompt = true;

	if (txt.value != "")
	    txt.style.border = "2px #FFFFFF solid";
	else
	{
	    txt.style.border = "2px #FF3333 solid";
	    prompt = !prompt;
	}

	return prompt;
    }

    if (validator(task)) {

	let text = toObject(task.value);

	storage.setItem(`task_${container.children.length + 1}`, task.value);

	// ** Add new task to the container **
	container.prepend(text);

    }

    return (output);
}

function loadStorage(storage, container) {

    for (let i = 0; i < storage.length; i++)
	container.prepend(toObject(storage[`task_${i+1}`]));

}

(() => {
    let text_box = document.getElementById('task_add');
    const add_button = document.getElementById('add_btn');
    let todos_box = document.querySelector('.tasks');
    let Storage = localStorage;

    loadStorage(Storage, todos_box);

    add_button.addEventListener('click', (e) => {
	e.preventDefault();
	text_box.value = add_task(text_box, todos_box, Storage);
    });

}
)();
