import { Library } from "./classes/Library";
import { User } from "./classes/User";
import { Book } from "./classes/Book";
import { GenderBook } from "./enums/GenderBook";
import { StatsBook } from "./enums/StatsBook";

const Book1 = new Book('Harry Potter', 'J K Rowling', [GenderBook.Fantasy], StatsBook.Borrowed)
const Book2 = new Book('A arte da guerra', 'Sun Tzu', [GenderBook.History], StatsBook.reserved)
const Book3 = new Book('Dracula', 'Bram Stoker', [GenderBook.Romance, GenderBook.Terror], StatsBook.Late)
const Book4 = new Book('50 Tons de Cinza', 'E L James', [GenderBook.Romance, GenderBook.Gore], StatsBook.Available)


const User1 = new User('Teobaldo', 123,40028922,0, [], [], [] )
const User2 = new User('Cleiton', 124,12345678,0, [], [], [] )
const User3 = new User('Joana', 125,87654321,0, [], [], [] )
const User4 = new User('Anderson', 126,34567891,0, [], [], [] )























































