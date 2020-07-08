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
