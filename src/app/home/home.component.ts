import { Component } from '@angular/core'


@Component({
    templateUrl: './home.component.html',
    styles: [`
    
       .title{
        display: flex;
        flex-wrap: wrap;
        margin: 15px 15px 15px 15px;
        align-items: center;
        background-color: lightblue;
        padding: 0 0 0 19px;
        flex-wrap:wrap;
       }
       
       .text-center{
        text-align: center;
       }
    @media (min-width: 992px){
       }
       .col-lg-80{
        display: flex;
        flex-wrap: wrap;
        margin: 15px 15px 15px 15px;
        align-items: center;
        background-color: white;
        padding: 0 0 0 19px;
        flex-wrap:wrap;

       }
    
    `]
    
})
export class HomeDetailsComponent {
}
