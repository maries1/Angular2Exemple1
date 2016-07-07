export class Article {
	id: number;
	code: number;
	description: string; 
	prixHt: number;
	tva: number;
	
	
	constructor(id: number, code: number, description: string, prixHt: number, tva: number) {
	 	this.id = id;
	 	this.code = code;
        this.description = description;
        this.prixHt = prixHt;
        this.tva = null;
	}
}