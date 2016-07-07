import { Injectable } from '@angular/core';
import { ARTICLE } from './article.mock';
import { Article } from './article';
​
@Injectable()
export class ArticleService {
​
    constructor() { }
​
    public getArticles() {
        return (ARTICLE);
        //return Promise.resolve(ARTICLE);
    
    }
​
    public getArticle(id : number) {
        return Promise.resolve(ARTICLE.filter(article => article.id === id));
    }
​
    public setArticle(article : Article) : boolean {
        return false;
    }
​
    public addArticle(article : Article) : boolean {
        return false;
    }
​
    public suppArticle(article : Article) : boolean {
        return false;
    }
     public suppAllArticle() : boolean {
        return false;
    }
​
}