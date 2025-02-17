import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostsComponent } from './pages/single-posts/single-posts.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'category', component: SingleCategoryComponent},
    {path: 'post', component: SinglePostsComponent},

    {path: 'about', component: AboutUsComponent},
    {path: 'contact', component: ContactUsComponent}
];
