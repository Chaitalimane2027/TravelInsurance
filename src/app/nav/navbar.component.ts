import { Component } from '@angular/core'

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles:[ `
  header#myHeader {
    box-shadow: 20px -30px 35px 15px grey;
    top: 0;
    width: 100%;
    z-index: 99999;

 }
 a{
   color: black;
 }
 
 .img-fluid{
    display: inline-block;
    margin-right: 5% !important;
 }

 .flex{
    margin: 10px 10px 0 10px;
    display:flex;
    align-items: center;
}
 @media(min-wdith: 992px){
 .flex{
    flex-direction: row;
    flex-wrap:nowrap;
    justify-content: flex-start;
 }
}

  a.active{
   color:  blue;
  }

 a.nav-item{
    margin-right: 100px;
    margin-left: 100px;
    text-decoration: none;
    font-size:larger;
     
 }`]

})
export class NavBarComponent {

}