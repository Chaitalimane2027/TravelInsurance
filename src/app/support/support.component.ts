import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
    templateUrl: './support.component.html',
    styles: [`

   .support-img{
    display: inline-block;
 }
 .evntsF{
    margin: 10px;
   }
   .support-content{
      display: flex;
  
   }
   .row{
    display: flex;
    flex-wrap: wrap;
    margin: 15px 15px 15px 15px;
    align-items: center;
   }

   .contctR{
    background: #ffffff;
    padding: 0 0 0 19px;
    flex-wrap:wrap;
   }

   .form-control,   
    textarea {
    display: flex;
    width: 70%;
    height: 35px;
    padding: 0 0 0 19px;
    margin: 15px 5px 15px 15px;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    background-color: #fff;
    background-clip: padding-box;
    border: none;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
} 
          
   textarea{
    height: 70px; 

   }
   
   a.support-email:hover{
      color:blue;
   }
   .support-email{
      text-decoration: none;
      color: black;
   }
   #submit{
      display: flex;
      flex-wrap: wrap;
      width: 15%;
      height: 45px;
      font-family: inherit;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      padding: 10px 23px 10px 23px;
      margin: 15px 200px 15px 200px;
      cursor: pointer;
      background-color: #0062cc;
      border-color: #005cbf;
      transition: 0.3s;
   }
    
   .submitbtn:hover{
    color: white;
  }
   @media (min-width: 992px){
   .col-lg-6 {
      
    align-items: center;
    flex: 0 0 50%;
    max-width: 50%;
}
   }
   .col-lg-10 {
    margin-left: 15px;
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
}

   .alert-info {     
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 70%;
    height: 35px;
    margin: 15px 5px 15px 15px;
    color: #0c5460;
    background-color: #d1ecf1;
    padding: 0.60rem 0.60rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
}


`]

})
export class SupportDetailsComponent {


   showMsg() {
      alert("Thank you for contacting us! We will get back to you shortly.");
    }

    
   }
