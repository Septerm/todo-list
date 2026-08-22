import { Todolist } from "./todolist.js";
import { Project } from "./project.js";
import { Task } from "./task.js";



export class Storage {


    static saveTodoList(data) {
        localStorage.setItem('todoList', JSON.stringify(data))
    }

    static getTodoList() {
        const todoList = Object.assign(
            new Todolist(),
            JSON.parse(localStorage.getItem('todoList'))
        )

        todoList.setProjects(
            todoList
            .getProjects()
            .map( (project) => Object.assign(new Project(), project))
        )

        todoList
        .getProjects()
        .forEach( (project) => 
            project.setTasks(
                project
                .getTasks()
                .map( (task) => Object.assign(new Task(), task))
            )
        )

        return todoList;
    }

    static addProject(newProject) {

        const todoList = Storage.getTodoList();
        todoList.addProject(newProject);
        Storage.saveTodoList(todoList);
    }

    static deleteProject(projectName) {

        const todoList = Storage.getTodoList();
        todoList.deleteProject(projectName);
        Storage.saveTodoList(todoList);
        
    }

    static addTask(projectName, newTask) {
        const todoList = Storage.getTodoList();
        todoList.getProject(projectName).addTask(newTask);
        Storage.saveTodoList(todoList);
    }

    static deleteTask(projectName, taskName) {
        const todoList = Storage.getTodoList();
        todoList.getProject(projectName).deleteTask(taskName);
        Storage.saveTodoList(todoList);
    }

   
}

