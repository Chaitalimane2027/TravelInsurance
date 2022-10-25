import { Component } from '@angular/core'

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles:[ `
  header#myHeader {
    box-shadow: 1px -30px 35px 14px white;
    top: 0;
    width: 100%;
    z-index: 99999;

 }
 
 .img-fluid{
    display: inline-block;
    margin-right: 5% !important;
 }

 @media(min-wdith: 992px){
 .flex{
    flex-direction: row;
    flex-wrap:nowrap;
    justify-content: flex-start;
 }
}

.flex{
    display:flex;
    align-items: center;
}

 .navbar-default{
    margin-left: 100px;
 }

 .nav-item{
    margin-right: 150px;
    text-decoration: none;
    font-size:larger;
    color: black;
 }`]

})
export class NavBarComponent {

}