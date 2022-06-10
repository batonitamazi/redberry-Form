import { environment } from "../environment/environment";
import { Resource } from "../models/resource";
import { Serializer } from "../models/serializer";
import axios from "axios";

const API_BASE_URL = environment.basePath

export class ResourceProvider<T extends Resource> {
    constructor(public endpoint: string, public serializer: Serializer) {

    }
    public list = async () => new Promise((resolve, reject) => {
        axios.get(`${environment.basePath}/${this.endpoint}`)
            .then((resp) =>
                resolve(this.convertList(resp.data))).catch((error) => reject(error))
    })
    private convertList(data: any, endpoint = ""): any {
        return {
            results: data.map((item: any) => this.serializer.fromJson(item)),
        };
    }

}