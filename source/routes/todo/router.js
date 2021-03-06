// Core
import express from 'express';

// Handlers
import * as todos from './';

const route = express.Router();

route.get('/', todos.read);
route.post('/', todos.create);
route.delete('/:id', todos.remove);
route.put('/:id', todos.update);

export { route as todos };
