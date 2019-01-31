export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
    async getResource (url){
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            // throw res.status;
            throw new Error(`Error blabla ${res.status}`);
        }
        return await res.json();
    };
    async getAllCharacters(){
        const rez = await this.getResource("/characters?page=5&pageSize=10");
        return rez.map(this._transformCaracter)
    }
    async getAllBooks(){
        const rez = await this.getResource("/books");
        return rez.map(this._transformBook)
    }
    async getAllHouses(){
        const rez = await this.getResource("/houses?page=5&pageSize=10");
        return rez.map(this._transformHouses)
    }

    async getCharacter(id){
        const rez = await this.getResource(`/characters/${id}`);
        return this._transformCaracter(rez);
    }
    async getBooks(id){
        const rez = await this.getResource(`/books/${id}`);
        return this._transformBook(rez);
    }
    async getHouses(id){
        const rez = await this.getResource(`/houses/${id}`);
        return this._transformHouses(rez);
    }
    _transformCaracter(char){
        return{
            name:char.name,
            gender:char.gender,
            born:char.born,
            died:char.died,
            culture:char.culture
        }
    }
    _transformBook(book){
        return{
            name:book.name,
            numberOfPages:book.numberOfPages,
            publiser:book.publiser,
            released:book.released,
            culture:book.culture
        }
    }
    _transformHouses(houses){
        return{
            name:houses.name,
            region:houses.region,
            words:houses.words,
            titles:houses.titles,
            overlord:houses.overlord,
            ancestralWeapons:houses.ancestralWeapons
        }
    }
}
// const got = new GotService
// got.getAllCharacters()
//     .then(res => console.log(res));
// got.getCharacter(260)
//     .then(res => console.log(res));    
// got.getAllBooks()
//     .then(res => console.log(res));
// got.getBooks(10)
//     .then(res => console.log(res));    
// got.getAllHouses()
//     .then(res => console.log(res));
// got.getHouses(260)
//     .then(res => console.log(res));        