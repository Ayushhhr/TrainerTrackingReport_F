import { Topic } from "./Topic";

export class Profile
{

    id : number;
    firstName : String;
    lastName : String;
    mobNum : number;
    email : String;
    address : String;

    topic:Topic[];

    constructor()
    {
        this.id = 0;
        this.firstName = "";
        this.lastName = "";
        this.mobNum = 0;
        this.email = "";
        this.address = "";
        this.topic = [];
    }
}