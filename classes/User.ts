import { StatsBook } from "../enums/StatsBook"
import { Book } from "./Book"

export class User{
    name: string
    id : number
    contact: number
    penalty: number
    reservedBooks: Book[]
    borrowedBooks: Book[]
    borrowingHistoric: Book[]
    

    constructor(name:string,id:number,contact:number,penalty: number,reservedBooks:Book[],borrowedBooks: Book[],borrowingHistoric: Book[]){
        this.name = name
        this.id = id
        this.contact = contact
        this.penalty = penalty
        this.reservedBooks = reservedBooks
        this.borrowedBooks = borrowedBooks
        this.borrowingHistoric = borrowingHistoric
        
    }

    getName(): string {
        return this.name
    }
    getId(): number {
        return this.id
    }
    
    getBorrowedBooks(): Book[] {
        return this.borrowedBooks
    }
    setBorrowedBooks(value: Book[]) {
        this.borrowedBooks = value
    }
    geteresrvedBooks(): Book[] {
        return this.reservedBooks
    }
    setreservedBooks(value: Book[]) {
        this.reservedBooks = value
    }
    getBorrowingHistoric(): Book[] {
        return this.borrowingHistoric
    }
    setBorrowingHistoric(value: Book[]) {
        this.borrowingHistoric = value
    }
    getPenalty(): number {
        return this.penalty
    }
    setPenalty(value: number) {
        this.penalty = value
    }

}

