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

    async remove(id){
        return await this.models.todo.remove(id);
    }

    async update(id){
        return await this.models.todo.update(id);
    }


}
