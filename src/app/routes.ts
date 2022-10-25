import { Routes } from '@angular/router'
import { CoveragesDetailsComponent } from './coverages/coverages.component'
import { FaqDetailsComponent } from './faq/faq.component'
import { HomeDetailsComponent } from './home/home.component'
import { SupportDetailsComponent } from './support/support.component'
 

export const appRoutes:Routes = [
  { path: 'home', component: HomeDetailsComponent},
  { path: 'insurancecoverages', component: CoveragesDetailsComponent},
  { path: 'faqs', component: FaqDetailsComponent},
  { path: 'contactus', component: SupportDetailsComponent}
]