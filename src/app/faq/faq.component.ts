import { Component,OnInit, ViewEncapsulation } from '@angular/core'
import { IFaqs } from './model/IFaqs';


@Component({
    templateUrl: './faq.component.html',
    styleUrls:['./faq.component.css'],
    encapsulation: ViewEncapsulation.None

})
export class FaqDetailsComponent implements OnInit {
    faqs: IFaqs[] = [];
    constructor() { }
  
    ngOnInit(): void {
      fetch('../assets/faqs.json').then(res => res.json())
        .then(json => {
          this.faqs = json;
        });
    }
  }