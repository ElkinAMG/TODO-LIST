function add_task(task, container)
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

	let text = document.createElement('article');

	text.setAttribute('class', 'task');
	text.appendChild(document.createElement('p'));
	text.children[0].textContent = task.value;

	// ** Add trash icon **
	//text.append(document.createElement('button'));
	//text.children[1].setAttribute('class', 'trash');
	//text.children[1].appendChild(document.createElement('i'));
	//text.children[1].children[0].setAttribute('class', 'fa fa-minus-square');

	// ** Add new task to the container **
	container.prepend(text);

    }
    else
    {
	;
    }


    return (output);
}

(() => {
    let text_box = document.getElementById('task_add');
    const add_button = document.getElementById('add_btn');
    let todos_box = document.querySelector('.tasks');

    add_button.addEventListener('click', (e) => {
	e.preventDefault();
	text_box.value = add_task(text_box, todos_box);
    });
}
)();
