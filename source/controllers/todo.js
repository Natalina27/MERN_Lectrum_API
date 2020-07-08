import { Todo as TodoModel } from '../models';

export class Todo {
    constructor(data) {
        this.models = {
            todo: new TodoModel(data),
        };
    }

    async read() {
        const data = await this.models.todo.read();

        return data;
    }
}
