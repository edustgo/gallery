import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-modal-register-image',
  templateUrl: './modal-register-image.component.html'
})
export class ModalRegisterImageComponent implements OnInit {

  imageForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _dialogRef: MatDialogRef<ModalRegisterImageComponent>
  ) {}

  ngOnInit(): void {
    this.imageForm = this._formBuilder.group({
      image: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
      name: ['', Validators.required],
      model: ['', Validators.required],
      homeworld: ['', Validators.required],
      eyeColor: ['', Validators.required],
      skinColor: ['', Validators.required],
      height: ['', Validators.required],
      species: ['', Validators.required],
      wiki: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
    });
  }

  /**
   * @description Save data from form image and return it
   */
  saveImage(): void {
    if (this.imageForm.valid) {
      this._dialogRef.close({ data: this.imageForm.value });
    }
  }

}