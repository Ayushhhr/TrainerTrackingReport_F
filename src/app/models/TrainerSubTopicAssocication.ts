import { SubTopic } from "./SubTopic";
import { Trainer } from "./Trainer";

export class TrainerSubTopicAssocication{
    
    id:number;
    trainer:Trainer;
    subtopic:SubTopic;

    constructor()
    {
        this.id=0;
        this.trainer= new Trainer(); 
        this.subtopic= new SubTopic();
    }

}