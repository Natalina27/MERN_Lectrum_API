import {Todo as TodoModel} from '../models';

export class Todo {
    constructor(data) {
        this.models = {
            todo: new TodoModel(data),
        };
    }

    async read() {
        return await this.models.todo.read();
    }

    async create(){

        return await this.models.todo.create();

    }
}
