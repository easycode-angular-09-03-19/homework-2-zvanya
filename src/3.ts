// 3. Есть два апи для получения и работы с новостями одно для получения новостей из USA второе из Ukraine.
//    Под эти апи создано по два интерфейса и по два класса. Переделайте это в namespaces.

// News api USA
interface INews {
    id: number;
    title: string;
    text: string;
    author: string;
}

class NewsService {
    protected apiurl: string = 'https://news_api_usa_url';
    public getNews() {} // method
}

// News api Ukraine
interface INews2 {
    uuid: string;
    title: string;
    body: string;
    author: string;
    date: string;
    imgUrl: string;
}

class NewsService2 {
    protected apiurl: string = 'https://news_api_2_url';
    public getNews() {} // method get all news
    public addToFavorite() {} // method add to favorites
}



namespace USA {
    export interface INews {
        id: number;
        title: string;
        text: string;
        author: string;
    }
    
    export class NewsService {
        protected apiurl: string = 'https://news_api_usa_url';
        public getNews() {} // method
    }
}

namespace UA {
    export interface INews {
        uuid: string;
        title: string;
        body: string;
        author: string;
        date: string;
        imgUrl: string;
    }
    
    export class NewsService {
        protected apiurl: string = 'https://news_api_2_url';
        public getNews() {} // method get all news
        public addToFavorite() {} // method add to favorites
    }
}