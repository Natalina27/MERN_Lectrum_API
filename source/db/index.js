// Core
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { v4 } from 'uuid';

const mongooseOptions = {
    promiseLibrary:     global.Promise,
    poolSize:           3,
    keepAlive:          30000,
    connectTimeoutMS:   5000,
    useNewUrlParser:    true,
    useFindAndModify:   false,
    useCreateIndex:     true,
    useUnifiedTopology: true,
};

fs.readFile(path.resolve('db'), 'utf-8', (error, data) => {
    let DB_NAME = data;
    if (error) {
        DB_NAME = v4();
        fs.writeFile(path.resolve('db'), DB_NAME, (error) => {
            if (error) {
                // eslint-disable-next-line
                console.error(error);
            }
        });
    }

    const connection = mongoose.connect(
        `mongodb://lab.lectrum.io:37019/${DB_NAME}`,
        mongooseOptions,
    );

    connection
        .then(() => {
            // eslint-disable-next-line
            console.log(`DB '${DB_NAME}' connected`);
        })
        .catch(({ message }) => {
            // eslint-disable-next-line
            console.log(`DB '${DB_NAME}' connectionError: ${message}`);
        });
});
