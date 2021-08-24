import { storageService } from "./storage.service.js"


export const searchBookService = {
    getBookSearchResults
}

const API_KEY = `_Nope_`;
const SEARCHES_KEY = 'bookSearchesDB'
const gSearches = storageService.loadFromStorage(SEARCHES_KEY) || [];

function getBookSearchResults(searchTxt){
    // Retrieve from cache if exist
    const cacheResult = gSearches.find(search => {
        if(search.searchTxt === searchTxt && (new Date() - Date.parse(search.timeStamp)) < 1000*60*60){
            console.log('Retrieve books from cache');
            return true;
        }
    });

    if(cacheResult){
        return Promise.resolve(cacheResult.results)
    }
    
    // Retrieve from server
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTxt}&key=${API_KEY}`)
        .then(res => {
            console.log('Retrieve books from server')
            const search = {
                searchTxt,
                results: res.data,
                timeStamp: new Date()
            }

            gSearches.push(search)
            
            storageService.saveToStorage(SEARCHES_KEY,gSearches);
            return res.data
        })
        .catch(err => {
            console.log('Could not get books from google: ', err);
        })
    
}
