import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { ImageGalleryComponent } from "./components/image-gallery/image-gallery.component";
import { GalleryRoutingModule } from "./gallery-routing.module";
import { PageGalleryComponent } from "./page-gallery/page-gallery.component";
import { ModalViewComponent } from "./components/modal-view/modal-view.component";
import { ModalRegisterImageComponent } from "./components/modal-register-image/modal-register-image.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    ImageGalleryComponent,
    PageGalleryComponent,
    ModalViewComponent,
    ModalRegisterImageComponent
  ],
  imports: [
    CommonModule,    
    GalleryRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class GalleryModule {}