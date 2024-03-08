import { Course } from "./Course";

export class Trainer{

    id:number;
    name:String;
    email:String;

    course:Course[];

    constructor()
    {
        this.id=0;
        this.name="";
        this.email="";
        this.course=[];
    }

}