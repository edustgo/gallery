import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DetailImage } from "src/core/interfaces/DetailImage";

@Component({
  selector: 'app-modal-view',
  templateUrl: './modal-view.component.html'
})
export class ModalViewComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DetailImage) {}

}