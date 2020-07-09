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

    async remove(id){
        //findByIdAndRemove - возвращает сущность по ее id
        //если данные не были найдены возвращает null
        const source = await todo.findByIdAndRemove(id).lean();
        if(!source){
            throw new Error(`todo with id ${id} not found`);
        }

        return `todo with id ${id} deleted`;
    }
}
