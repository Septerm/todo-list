import { Project } from "./project.js";
import  {Task} from "./task.js";


export class Todolist {

    constructor () {

        this.projects = [];
        this.projects.push(new Project("Inbox"));
        const title = "Determine Reaction Mechanism";
        const description = "Determination of the reaction pathway that yields the highest economical potential";
        const dueDate = "4/8/2026";
        const priority = "High";
        this.projects[0].addTask(new Task(title, description, dueDate, priority));
    }


    setProjects(projects) {

        this.projects = projects;
    }

    getProjects() {

        return this.projects;
    }

    getProject(projectName) {

        return this.projects.find((project) => project.getName() === projectName);
    }

    addProject(newProject) {

       if( this.projects.find((project) => project.getName() == newProject.name)) return;
       this.projects.push(newProject);
    }

    deleteProject(projectName) {

        this.projects = this.projects.filter((project) => project.getName()  !== projectName) ;
    }



}