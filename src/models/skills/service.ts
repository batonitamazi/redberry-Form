import { Skill } from "./skill"
import { SkillSerializer } from "./serializer"
import { ResourceProvider } from "../../resource Provider/resource.provider"

export class SkillProvider extends ResourceProvider<Skill> {
    constructor() {
        super('skills', new SkillSerializer())
    }
}

export const skillService = new SkillProvider()