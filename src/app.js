const express = require('express');
const path = require('path');
// require('./database/models/touristDestinations');
const indexRouter = require('./routes/index.routes');
const excursionRouter = require('./routes/excursions.routes');
const userRouter = require('./routes/users.routes');
const authRouter = require('./routes/auth.routes');

class App {
  constructor(port) {
    this.app = express();
    this.port = port;

    this.setMiddlewares();
    this.setViewEngine();
    this.setStaticFiles();
    this.setRoutes();
  }

  setMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true })); 
  }

  setViewEngine() {
    this.app.set('views', path.resolve(__dirname, '../views')); 
    this.app.set('view engine', 'pug');
    this.app.locals.basedir = this.app.get('views');
  }

  setStaticFiles() {
    this.app.use(express.static(path.resolve(__dirname, '../public')));
  }

  setRoutes() {
    this.app.use(indexRouter);
    this.app.use(excursionRouter);
    this.app.use(userRouter);
    this.app.use(authRouter);
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en http://localhost:${this.port}`);
    });
  }
}

module.exports = App;
