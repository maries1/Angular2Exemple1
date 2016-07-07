import { Component, Input, OnInit } from '@angular/core';
import { Article }    from './article';
import { ArticleService } from '../service';
​
@Component({
    selector: 'article-form',
    templateUrl: 'app/article/article.component.html',
    providers: [ArticleService]
​
})
​
export class ArticleDetailComponent implements OnInit {
    private _listeArticle: Article[];
    private _articleService: ArticleService;
    private _indiceEnCours: number;
​
constructor(articleService: ArticleService) {
        this._articleService = articleService;
    }
​
     @Input() enrarticle: Article;
    titre = 'Saisie article';
​
    submitted = false;
​
    ngOnInit() { 
         this._listeArticle = this._articleService.getArticles();       
         this.setEncours(0);    
    }
​
    onSubmit() {
        this.submitted = true;
        if (this.enrarticle.id < 0)
            this._articleService.addArticle(this.enrarticle);
        else
            this._articleService.setArticle(this.enrarticle);
        this._listeArticle[this._indiceEnCours] = this.enrarticle;
    }
​
    active = true;
    private ajouterArticle() {
        this.enrarticle = new Article(0, 0, '', 0, 0);
        this.active = false;
        setTimeout(() => this.active = true, 0);
        this._indiceEnCours = this._listeArticle.push(this.enrarticle) - 1;
    }
​
        private setEncours(ind: number): void {
        this.enrarticle = this._listeArticle[ind];
        this._indiceEnCours = ind;
    }
​
    private setSuivant() {
        if (this._indiceEnCours < this._listeArticle.length - 1)
            this.setEncours(++this._indiceEnCours);
    }
​
    private setPrecedent() {
        if (this._indiceEnCours > 0)
            this.setEncours(--this._indiceEnCours);
    }
}