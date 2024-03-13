import { StatsBook } from "../enums/StatsBook";
import { LibraryI } from "../interface/Library2";
import { Book } from "./Book";
import { User} from "./User";


export class Library implements LibraryI{
    bookList: Book[];
    userList: User[];

    constructor( ){
        this.bookList = []
        this.userList = []
    }
    BookAdd(bookName: Book): string {
      this.bookList.push(bookName);
      return "Book added to the Library.";
    }
    bookConsultation(bookName: string): string{
        let BookFound: string = "Livro não encontrado.";
        for (let book of this.bookList) {
          if (book.getTittle() === bookName) {
            BookFound = `${book.getTittle}: ${book.getStats}`;
          }
        }
        return BookFound;
      }


    Listavailable(list:Book[]) {
        let books = ''
        for (let Book of list) {
            if(StatsBook.Available === Book.stats){
                books+=Book.title
            }          
        }
        return books;
    }
    Listborrowed(list:Book[]){
        let books = ''
        for (let Book of list) {
            if (StatsBook.Borrowed === Book.stats) {
                books+=Book.title
            }
        }
        return books;
    }
    Listlate(list:Book[]){
        let books = ''
        for (let Book of list) {
            if (StatsBook.Late === Book.stats) {
                books+=Book.title
            }          
        }
        return books;
    }


             bookGenderList(gender : string, list: Book[]): string {
                let ListOfBook: string = `Gender of the book: ${gender}`
                for(let book of this.bookList ){
                for (let bookGender of book.gender) {
                    if (bookGender === gender) {
                    ListOfBook += book.gender;
                }
            }
         }
         if (ListOfBook === `Gender of the book: ${gender}: `) {
            return `no books of the gender ${gender} found.`;
          } else return ListOfBook;
        }

        userLogin(user: User): string {
            this.userList.push(user);
            return "Registered user.";
          }

        historicUser(user: User): string {
            let historic: string= `User borrowing history ${user}: `

            for(let Registered of this.userList){
                if(Registered === user){
                    if(user.borrowingHistoric.length !== 0){
                        for(let book of user.borrowingHistoric){
                            historic += book
                        }
                    }else return 'User has not yet rented any books.';
                }else return 'User not found.';
            }return historic;
        }

        loan(user: User, book: Book): string {
            for (let RegisteredUser of this.userList) {
            if (RegisteredUser.getName() === user.getName()) {
            for (let RegisteredBook of this.bookList) {
              if (RegisteredBook.getTittle() === book.getTittle()) {
              if (RegisteredBook.getStats() === StatsBook.Available) {
                  user.setBorrowedBooks([...user.getBorrowedBooks(), book]);
                  user.setBorrowingHistoric([...user.getBorrowingHistoric(), book]);
                  book.setStats(StatsBook.Borrowed);
                    } else return "Unavailable book.";
                  } else return "Book not found.";
            }
           } else return "User not found.";
      }
            return "Book withdrawn.";
  }

          reserved(user: User, book: Book): string {
            for (let RegisteredUser of this.userList) {
            if (RegisteredUser.getName() === user.getName()) {
            for (let RegisteredBook of this.bookList) {
              if (RegisteredBook.getTittle() === book.getTittle()) {
              if (RegisteredBook.getStats() === StatsBook.Available) {
                  user.setreservedBooks([...user.geteresrvedBooks(), book])
                  book.setStats(StatsBook.reserved);
                    }
                } else return "Book not found.";
                }
            } else return "User not found.";
            }
            return "Book withdrawn.";
          }
          verifyPenalty(user: User): string {
            let penalty: number = 0;
            for (let RegisteredUser of this.userList) {
              if (RegisteredUser.getName() === user.getName()) {
                penalty += user.getPenalty();
              } else return "User not found";
            }
            return ` Penalty: ${penalty}, User: ${user.getName()} `;
          }
    }
                


