import { Component } from '@angular/core';


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
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: none;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
} 
          
   textarea{
    height: 70px; 

   }
   
  .btn:hover{
    color: white;
  }

   #submit{
      display: flex;
      flex-wrap: wrap;
      width: 15.5%;
      height: 45px;
      font-family: inherit;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      padding: 10px 23px 10px 23px;
      margin: 15px 200px 15px 200px;
      cursor: pointer;
      align-items: center;
      background-color: #0062cc;
      border-color: #005cbf;
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

`]

})
export class SupportDetailsComponent {
}