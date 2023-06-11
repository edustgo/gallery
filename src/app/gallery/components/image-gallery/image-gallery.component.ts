import { Component, EventEmitter, Input, OnChanges, Output, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { Images } from "src/core/interfaces/Images";
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnChanges {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() images: Images[] = new Array<Images>();
  @Output() onClickImage: EventEmitter<Images> = new EventEmitter<Images>();
  @Output() addImage: EventEmitter<string> = new EventEmitter<string>();
  dataSource: MatTableDataSource<Images>;
  myImages: Images[] = new Array<Images>();

  ngOnChanges(): void {
    if (this.images.length) {
      this._createImages();
    }
  }
  /**
   * @description Create images for set paginator and filter
   */
  private _createImages(): void {
    this.dataSource = new MatTableDataSource<Images>(this.images);
    setTimeout(() => this.dataSource.paginator = this.paginator, 100)
    this.dataSource.connect().subscribe({
      next: (res: Images[]) => this.myImages = res, 
      error: (err) => console.log('error ', err)
    });
  }

  /**
   * @description Filter in gallery from keyboard typing
   * @param event {Event} Keyboard every typing into input
   */
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (!filterValue.length) {
      this._createImages();
    }
  }

  /**
   * @description Handler action when i click over image or add button
   * @param type {string} Type of action
   * @param data {Images} Selected image
   */
  clickType(type: string, data: Images = null): void {
    switch(type) {
      case 'view':
        this.onClickImage.emit(data);
        break;
      case 'add':
        this.addImage.emit('');
        break;
    }
  }

}