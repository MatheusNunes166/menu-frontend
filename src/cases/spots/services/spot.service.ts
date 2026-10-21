import { api } from "../../../lib/axios"
import type { spotDTO } from "../dtos/spot.dto"

const ENDPOINT = '/spots';

export const SpotService = {
    async listAll():Promise<spotDTO[]>{
        const result = await api.get<spotDTO[]>(ENDPOINT);
        return result.data;
    },

    async findOne(id:string):Promise<spotDTO>{
        const result = await api.get<spotDTO>(`${ENDPOINT}/${id}`);
        return result.data;
    }
}