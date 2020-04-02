import express from 'express';
import routes from './routes';
<<<<<<< HEAD

import './database';
=======
>>>>>>> 1f95813345d59e09ea492d8d5d36996915da5544

import './database';

class App {
    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;