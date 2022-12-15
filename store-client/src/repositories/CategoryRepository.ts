import Category from "../models/Category";
import { IRepository } from "./IRepository";


export class CategoryRepository implements IRepository<Category> {
    async getAll(): Promise<Category[] | null> {
        
        return [
            {id: 1, title: 'Fantasy'},
            {id: 2, title: 'Computer'}
        ]
    }
    async get(id: number|string): Promise<Category | null>{
        const result = {id: 1, title: 'Fantasy'}

        return result
    }
    async create(entity: Partial<Category>): Promise<void> {
        const result = {id: 3, title: 'Action'}

        console.log(result)
    }
    async update(entity: Partial<Category>): Promise<void>{
        const result = {id: 1, title: 'Romantic'}

        console.log(result)
    }
    async delete(id: number|string): Promise<void>{
        const result = {id: 1, title: 'Fantasy'}

        console.log(result)
    }
}
