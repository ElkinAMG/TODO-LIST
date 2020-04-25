(function(){
    let list = document.getElementById('list'),
	taskInput = document.getElementById('taskInput'),
	submit = document.getElementById('btn-add'),
	form = document.getElementById('form');

    // Capture enter event from form tag
    form.addEventListener('keypress', function(event){
	if (event.key === 'Enter')
	{
	    event.preventDefault();
	    addTask();
	}
    });

    // Functions
    function addTask()
    {
	let task = taskInput.value,
	    newTask = document.createElement("li"),
	    link = document.createElement("a"),
	    content = document.createTextNode(task);

	checkInput();

	let check = lookFor(task);

	if (check === false){ return (false); }

	if (task == "")
	{
	    taskInput.className = "error";
	    return (false);
	}

	// Add content to link
	link.appendChild(content);
	// Add attribute to link
	link.setAttribute("href", "#");

	// Add link to newTask
	newTask.appendChild(link);
	// Add line separator to task
	newTask.appendChild(document.createElement("hr"));

	// Add new task
	list.appendChild(newTask);

	taskInput.value = "";


	for (let i = 0; i <= list.children.length - 1; i++)
	{
	    list.children[i].addEventListener("click", removeTask);
	}
    };

    function checkInput()
    {
	taskInput.className = "";
    };

    function lookFor(currentTask)
    {
	for (let i = 0; i <= list.children.length - 1; i++)
	{
	    if (list.children[i].textContent === currentTask)
	    {
		taskInput.value = "";
		alert("This task already exists");
		return (false);
	    }
	}
    }

    function removeTask()
    {
	this.parentNode.removeChild(this);
    };

    // Events

    // Add Task
    submit.addEventListener("click", addTask);

    // Check Input
    taskInput.addEventListener("click", checkInput);

}())
