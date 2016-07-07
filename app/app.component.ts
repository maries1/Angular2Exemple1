import { Component } from '@angular/core';
import { ClientDetailComponent } from './client/client.component';
import { ArticleDetailComponent } from './article/article.component';

@Component({
    selector: 'my-app',
    template: `<client-form></client-form><article-form></article-form>`,
    directives: [ClientDetailComponent, ArticleDetailComponent]
})

export class AppComponent  {
   
}