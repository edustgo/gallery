import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageGalleryComponent } from "./page-gallery/page-gallery.component";

const routes: Routes = [
  {
    path: '',
    component: PageGalleryComponent
  }
]

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class GalleryRoutingModule {}