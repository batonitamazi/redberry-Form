import { title } from "process";
import { Resource } from "../resource";
import { Serializer } from "../serializer";
import {Skill} from '../skills/skill'

export class SkillSerializer implements Serializer {
    fromJson(json: any)  {
        const skill = new Skill()
        skill.id = json.id 
        skill.title = json.title
       return skill 
    }
    toJson(item: Skill) {
        const obj: any={

        }
        
    }
}