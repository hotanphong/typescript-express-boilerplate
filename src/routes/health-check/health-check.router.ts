import {Router, Request, Response} from "express";

const healthCheckRouter = Router();

healthCheckRouter.get('/', (req: Request, res: Response) => {
    res.Ok({hello: 'world'});
})

module.exports = healthCheckRouter;