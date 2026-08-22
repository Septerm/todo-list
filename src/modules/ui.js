export class Ui {


    static displayProject(project, storage, TaskClass) {

        const projectName = document.createElement("h2");
        const taskContainer = document.querySelector(".card-container");
        const header = document.querySelector(".main-header");
        const modal = document.querySelector("#my-dialog-2")
        const createTask = document.createElement("button");
        createTask.textContent = "+ Add Task";
        createTask.command = "show-modal";
        createTask.commandForElement = modal;
        header.innerHTML = "";
        taskContainer.innerHTML ="";
        projectName.textContent = project.getName();
        header.appendChild(projectName);
        header.appendChild(createTask);
        

    

        const tasks = project.getTasks();

        tasks.forEach((task) => {

            const card = document.createElement("div");
            card.classList.add("card");

            const title = document.createElement("h3");
            title.textContent = task.getTitle();

            const description = document.createElement("p");
            description.textContent = task.getDescription();

            const box = document.createElement("div");
            box.classList.add('box');
            const dueDate = document.createElement("p");
            dueDate.textContent = task.getDueDate();

            const priority = document.createElement("p");
            priority.textContent = task.getPriority();

            const deleteTaskBtn = document.createElement('button');
            deleteTaskBtn.textContent = "Remove Task";
            deleteTaskBtn.classList.add('removeTaskBtn');
            deleteTaskBtn.addEventListener('click', () => Ui.deleteTask(project.getName(), task.getTitle(),storage, TaskClass));
            
            
            box.appendChild(priority);
            box.appendChild(dueDate);
            box.appendChild(deleteTaskBtn);
            card.appendChild(title);
            card.appendChild(description);
            card.appendChild(box);
            taskContainer.appendChild(card);
        })


        Ui.taskForm(project, storage, TaskClass)

    }

   

    static deleteProject(projectName, storage, TaskClass) {

        storage.deleteProject(projectName);
        Ui.customProjects(storage, TaskClass);
        const inboxProject = storage.getTodoList().getProject("Inbox");
        Ui.displayProject(inboxProject, storage, TaskClass);
    }


    static defaultProjects(storage, TaskClass) {

        const topNav = document.querySelector("#top-nav");

        const projects = ["Inbox"]


        projects.forEach((projectName) => {

            const project = storage.getTodoList().getProject(projectName);
            const listItem = document.createElement('li');

            const iconSpan = document.createElement('span');
            iconSpan.classList.add('icon-inbox')

            const textSpan = document.createElement('span');
            textSpan.textContent = project.getName();

            const projectBtn = document.createElement('button');
            projectBtn.classList.add('project-btn');
            
            projectBtn.appendChild(iconSpan);
            projectBtn.appendChild(textSpan);

            projectBtn.addEventListener('click', () => Ui.displayProject(project, storage, TaskClass));

            listItem.appendChild(projectBtn);
            topNav.appendChild(listItem)

        })
        

    }


    static deleteTask(projectName,taskName, storage, TaskClass) {

        storage.deleteTask(projectName, taskName);
        Ui.customProjects(storage, TaskClass);
        Ui.displayProject(storage.getTodoList().getProject(projectName), storage, TaskClass);
    }

    static customProjects(storage, TaskClass) {

        const allProjects = storage.getTodoList().getProjects();

        const projects = allProjects.filter( (project) => project.getName() !== "Inbox");

        //Projects on the sidebar render
        const buttomNav = document.querySelector("#buttom-nav");
        buttomNav.innerHTML = "";
        const modal = document.getElementById('my-dialog');

        projects.forEach((project) => {

            const listItem = document.createElement('li');

            const iconSpan = document.createElement('span');
            iconSpan.classList.add('icon-project');
            
            const textSpan = document.createElement('span');
            textSpan.textContent = project.getName();

            const projectBtn = document.createElement('button');
            projectBtn.classList.add('project-btn'); // For easier layout styling
            projectBtn.appendChild(iconSpan);
            projectBtn.appendChild(textSpan); // Append the text alongside the icon
           
            const deleteProjectBtn = document.createElement('button');
            deleteProjectBtn.classList.add('deleteProjectBtn');
            deleteProjectBtn.textContent = 'X';
            

            projectBtn.addEventListener('click', () => Ui.displayProject(project, storage, TaskClass));
            deleteProjectBtn.addEventListener('click', () => Ui.deleteProject(project.getName(), storage, TaskClass) );

            listItem.appendChild(projectBtn);
            listItem.appendChild(deleteProjectBtn);
            buttomNav.appendChild(listItem)

        })


        //Add Project Button render 

    
        const listItem = document.createElement('li');
        const projectBtn = document.createElement('button');
        projectBtn.textContent = "+ Add Project";
        projectBtn.command = "show-modal";
        projectBtn.commandForElement = modal;
        

        //Add buttom Functionality goes here

        listItem.appendChild(projectBtn);
        buttomNav.appendChild(listItem)

    }

    static taskForm(project, storage, TaskClass) {

        const form = document.querySelector('#my-dialog-2 form');

        const newForm = form.cloneNode(true);
        form.parentNode.replaceChild(newForm, form);

        newForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const taskTitle = document.getElementById('taskTitle');
            const taskDescription = document.getElementById('taskDescription');
            const taskPriority = document.getElementById('taskPriority');
            const taskDueDate = document.getElementById('taskDueDate');
            const taskModal = document.getElementById('my-dialog-2');
            const projectName = project.getName();

            storage.addTask(projectName,  new TaskClass (

                taskTitle.value, 
                taskDescription.value,
                taskDueDate.value,
                taskPriority.value
            ))

            Ui.displayProject(storage.getTodoList().getProject(projectName), storage, TaskClass);
            Ui.customProjects(storage, TaskClass);

            

            taskModal.close();
            newForm.reset();


        })

    }

    static projectForm(storage, Project, TaskClass) {

        const addProjectForm = document.querySelector('#my-dialog form');


        addProjectForm.addEventListener('submit', (event) => {

            

            const projectModal = document.getElementById('my-dialog');
            event.preventDefault();
            const projectName = document.getElementById('projectName');
            storage.addProject(new Project(projectName.value));
            
            projectModal.close();
            Ui.customProjects(storage, TaskClass);
        
        
        })

    }



}