export class Task {

    constructor(title, description,dueDate, priority ) {

        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        
    }

    // Set Fields

    setTitle(title) {
        this.title = title;
    }

    setDescription(description) {
        this.description = description;
    }

    setDueDate(dueDate) {
        this.dueDate = dueDate;
    }

    setPriority(priority) {
        this.priority = priority;
    }

    // Get Fields

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getDueDate() {
        return this.dueDate;
    }

    getPriority() {
        return this.priority;
    }


}






