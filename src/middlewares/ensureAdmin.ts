import {Request, Response, NextFunction, request} from "express";

export function ensureAdmin(request: Request, response: Response,next: NextFunction){

    //verificar se o User e admin
    const admin = false;

    if(admin){
        return next()
    }
    
    return response.status(401).json({
        error:"User unauthorized"
    });                                                                                                                                                                                                             

}
