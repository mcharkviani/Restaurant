import { Routes} from './api/routes';
import express, {Router} from 'express';
import { db } from './config/database'
import bodyParser from 'body-parser';
import * as routes from "./api/routes";

class App {
    public app: express.Application;
    public routerPrv: Routes = new Routes();
    // public router: Router =  Router();

    constructor() {
        this.app = express();
        this.config();
        this.routerPrv.routes(this.app);

    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }))
    }

    // private addRoutes(): void {
    //     this.app.use(this.router);
    //     this.app.use(routes.nodesRoutes);
    // }

}

export default new App().app;
