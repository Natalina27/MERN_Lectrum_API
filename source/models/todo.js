// Instruments
import {todo} from '../odm';

export class Todo {
    constructor(data) {
        this.data = data;
    }

    _formatTodo (todo) {
        return {
            id: todo._id,
            message: todo.message,
            favorite: todo.favorite,
            completed: todo.completed,
            created: todo.created
        };
    }

    async read () {
        // { message: 'JS' } -> WHERE
        //find -> [{}]
        //findOne -> {}

        const source = await todo.find({}).sort({ created: -1})
            .lean();

        return source.map((item) => this._formatTodo(item));
    }

    async create() {
        //{ message: 'Текст нашей задачи' }
        const source = await todo.create(this.data);
        return this._formatTodo(source);
    }
}
