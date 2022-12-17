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
}
