declare type IDetailType = Array<{
    message: string;
    detail: string;
}>

declare namespace Express {
    export interface Response {
        Ok(data: any): void
        BadRequest(details: IDetailType, message: string): void
        Unauthorized(details: IDetailType, message: string): void
        Forbidden(details: IDetailType, message: string): void
        InternalServerError(details: IDetailType, message: string): void
        NotFound(details: IDetailType, message: string): void
        Created(data: any): void
        NoContent(): void
        MethodNotAllowed(message: string): void
    }
}