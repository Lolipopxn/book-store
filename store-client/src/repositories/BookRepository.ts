import Book from "../models/Book";
import { IRepository } from "./IRepository";

export class BookRepository implements IRepository<Book> {
    async getAll(): Promise<Book[] | null> {

        return[
            {
                id: 1, title: 'Harry Potter', price: 560, stockAmount: 10,
                category: { id: 1, title: 'Fantasy'}
            }

        ]
    }
    async get(id: number|string): Promise<Book | null>{
        const result = {
            id: 1, title: 'Harry Potter', price: 560, stockAmount: 10,
            category: { id: 1, title: 'Fantasy'}
        }
        
        return result
      }
    
      async create(entity: Partial<Book>): Promise<void>{
        const result = {
            id: 1, title: 'Harry Potter', price: 560, stockAmount: 10,
            category: { id: 1, title: 'Fantasy'}
        } 
        console.log(result)
      }
    
      async update(entity: Partial<Book>): Promise<void>{
        const result = {
            id: 1, title: 'Harry Potter', price: 560, stockAmount: 10,
            category: { id: 1, title: 'Fantasy'}
        } 

        console.log(result)
      }
    
      async delete(id: number|string): Promise<void>{
        const result = {
            id: 1, title: 'Harry Potter', price: 560, stockAmount: 10,
            category: { id: 1, title: 'Fantasy'}
        }
        console.log(result)
      }
}
