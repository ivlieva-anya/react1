export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
    getResource = async (url)=>{
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            // throw res.status;
            throw new Error(`Error blabla ${res.status}`);
        }
        return await res.json();
    };
    getAllCharacters = async () => {
        const rez = await this.getResource("/characters?page=5&pageSize=10");
        return rez.map(this._transformCaracter)
    }
    getAllBooks = async()=>{
        const rez = await this.getResource("/books");
        return rez.map(this._transformBook)
    }
    getAllHouses = async()=>{
        const rez = await this.getResource("/houses?page=5&pageSize=10");
        return rez.map(this._transformHouses)
    }

    getCharacter = async(id)=>{
        const rez = await this.getResource(`/characters/${id}`);
        return this._transformCaracter(rez);
    }
    getBooks =  async(id)=>{
        const rez = await this.getResource(`/books/${id}`);
        return this._transformBook(rez);
    }
    getHouses = async(id)=>{
        const rez = await this.getResource(`/houses/${id}`);
        return this._transformHouses(rez);
    }
    isSet = (data) =>{
        if (data) {
            return data
        } else {
            return 'no data'
        }
    }
    _extractId = (item) => {
        const arr = item.split('/')
        return arr[arr.length-1]
    }
    _transformCaracter= (char)=>{
        return{
            id:this._extractId(char.url),
            name:this.isSet(char.name),
            gender:this.isSet(char.gender),
            born:this.isSet(char.born),
            died:this.isSet(char.died),
            culture:this.isSet(char.culture)
        }
    }
    _transformBook = (book)=>{
        return{
            id:this._extractId(book.url),
            name:this.isSet(book.name),
            numberOfPages:this.isSet(book.numberOfPages),
            publiser:this.isSet(book.publiser),
            released:this.isSet(book.released),
            culture:this.isSet(book.culture)
        }
    }
    _transformHouses = (houses)=>{
        return{
            id:this._extractId(houses.url),
            name:this.isSet(houses.name),
            region:this.isSet(houses.region),
            words:this.isSet(houses.words),
            titles:this.isSet(houses.titles),
            overlord:this.isSet(houses.overlord),
            ancestralWeapons:this.isSet(houses.ancestralWeapons)
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