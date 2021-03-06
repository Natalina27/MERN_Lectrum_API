// Instruments
import { Todo } from '../../controllers';

export const read =  async(req, res) => {
    try {
        const todo = new Todo(); //создаем экземпляр контроллера


        //у контроллера мы вызываем метод read,
        // контроллер вызывает модель
        //модель извлекает данные из базы
        //и возвращает все в переменную data
        const data = await todo.read();

        res.status(200).json({data: data});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const create = async (req, res) => {
    try {
        const todo = new Todo(req.body);
        const data = await todo.create();

        // 200 - SUCCESS
        // 201 -CREATED
        res.status(200).json({data});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const remove = async (req, res) => {
    try {
        const {id} = req.params;
        const todo = new Todo();
        const data = await todo.remove(id);

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const {id} = req.params;
        const todo = new Todo(req.body);
        const data = await todo.update(id);

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
