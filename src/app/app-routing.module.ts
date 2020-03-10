import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {PostsComponent} from './posts/posts.component'
import {PostComponent} from './post/post.component'
import {Tab1Component} from './tab1/tab1.component';
import {Tab2Component} from './tab2/tab2.component';

// http://localhost:4200/ -> HomeComponent
// http://localhost:4200/about -> AboutComponent
// http://localhost:4200/posts -> PostsComponent

const routes: Routes = [
  {path: '', component: PostsComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'posts/:id', component: PostComponent},
  {path: 'posts/:id#one', component: Tab1Component},
  {path: 'posts/:id#two', component: Tab2Component},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
