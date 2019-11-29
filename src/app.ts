import express, {Router} from 'express';
import bodyParser from 'body-parser';
import * as routes from './api';

class App {
    public app: express.Application;
    public router: Router =  Router();

    constructor() {
        this.app = express();
        this.config();
        // this.routerPrv.routes(this.app);
        this.addRoutes();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }))
    }

    private addRoutes(): void {
        this.app.use(this.router);
        this.app.use(routes.productPath, routes.productRoutes);
        this.app.use(routes.categoryPath, routes.categoryRoutes);
        this.app.use(routes.userPath, routes.userRoutes);
    }
}

export default new App().app;
