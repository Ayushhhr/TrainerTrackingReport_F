import { Trainer } from "./Trainer";

export class Batch{

    bid:number;
    bname:String;
    creation_date: Date;

    trainer:Trainer[];

    constructor()
    {
        this.bid=0;
        this.bname="";
        this.creation_date= new Date();
        this.trainer=[];
    }

}