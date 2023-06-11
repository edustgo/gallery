import { Component, OnDestroy, OnInit } from "@angular/core";
import { Images } from "src/core/interfaces/Images";
import { GalleryService } from "../services/gallery.service";
import { MatDialog } from "@angular/material/dialog";
import { ModalViewComponent } from "../components/modal-view/modal-view.component";
import { ModalRegisterImageComponent } from "../components/modal-register-image/modal-register-image.component";
import { DetailImage, FormDetailImage } from "src/core/interfaces/DetailImage";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-page-gallery',
  templateUrl: './page-gallery.component.html'
})
export class PageGalleryComponent implements OnInit, OnDestroy {
  
  dataImages: DetailImage[] = new Array<DetailImage>();
  images: Images[] = new Array<Images>();
  private _imageSubscription: Subscription;

  constructor(
    private _galleryService: GalleryService,
    private _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._imageSubscription = this._galleryService
      .getImages()
      .subscribe({
        next: (res) => {
          this.dataImages = res;
          this._buildImages(JSON.parse(JSON.stringify(res)));
        },
        error: (err) => console.log('Error: ', err)
      });
  }

  /**
   * @description View into modal an image with it details
   * @param evt {Images} Image that view in a modal
   */
  view(evt: Images): void {
    const find = this.dataImages.find(image => image?.id === evt?.id);
    if (find) {
      this._dialog.open(ModalViewComponent, {
        data: find
      });
    }
  }

  /**
   * @description Save locally (into array) a new image
   */
  addImage(): void {
    const dialog = this._dialog.open(ModalRegisterImageComponent, {
      width: '650px'
    });
    dialog.afterClosed().subscribe({
      next: (res: FormDetailImage) => {
        const image = res?.data;
        image.id = new Date().getTime().toString();
        this.dataImages.unshift(image);
        this._buildImages(JSON.parse(JSON.stringify(this.dataImages)));
      },
      error: (err) => console.log('Error:', err)
    });
  }

  /**
   * @description Create a new array with 3 properties
   * @param images {DetailImage[]} Images for create a new short array
   */
  private _buildImages(images: DetailImage[]): void {
    this.images = (images || []).map(image => (
      {
        id: image?.id,
        url: image?.image,
        name: image?.name }
    ));
  }

  ngOnDestroy(): void {
    this._imageSubscription?.unsubscribe();
  }

}