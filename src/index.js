import "./styles.css";
import  {Storage} from "./modules/storage.js"
import { Project } from "./modules/project.js"
import { Ui } from "./modules/ui.js"
import { Task } from "./modules/task.js";



Ui.projectForm(Storage, Project, Task);
Ui.displayProject(Storage.getTodoList().getProject("Inbox"), Storage, Task);
Ui.customProjects(Storage, Task);
Ui.defaultProjects(Storage, Task)
