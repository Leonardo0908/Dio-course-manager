import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ["./star.component.css"]
}) 
export class StarComponent implements OnChanges {

    @Input()
    rating:number = 0;

    StarWidth: number = 0;

    ngOnChanges(): void {
        //this.StarWidth = this.rating * 94 / 5; * POR 94 OU 74 para fazer o calculo das estrelas 
        this.StarWidth = this.rating * 74 / 5;
    }
}