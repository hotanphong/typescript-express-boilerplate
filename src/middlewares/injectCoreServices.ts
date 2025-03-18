import { NextFunction, Request, Response } from "express";

export function injectCoreServices(req: Request, res: Response, next: NextFunction) {
    res.Ok = function (data: any, message: string = "Success") {
        this.status(200).json({ message, data });
    }

    res.BadRequest = function (details: IDetailType, message: string = "Bad Request") {
        this.status(400).json({
            details, message
        });
    }

    res.Unauthorized = function (details: IDetailType, message: string = "Unauthorized") {
        this.status(401).json({
            details, message
        });
    }

    res.Forbidden = function (details: IDetailType, message: string = "Forbidden") {
        this.status(403).json({
            details, message
        });
    }

    res.InternalServerError = function (details: IDetailType, message: string = "Internal Server Error") {
        this.status(500).json({
            details, message
        });
    }

    res.NotFound = function (details: IDetailType, message: string = "Not Found") {
        this.status(404).json({
            details, message
        });
    }

    res.Created = function (data: any, message: string = "Resource Created") {
        this.status(201).json({ message, data });
    }

    res.NoContent = function (message: string = "No Content") {
        this.status(204).json({ message });
    }

    res.MethodNotAllowed = function (message: string = "Method Not Allowed") {
        this.status(405).json({
            message
        });
    }

    next();
}
