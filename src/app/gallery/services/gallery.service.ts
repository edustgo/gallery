import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DetailImage } from "src/core/interfaces/DetailImage";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private _url: string = environment.url;

  constructor(private _http: HttpClient) {}

  /**
   * @description Make to request for get all images
   * @returns {Observable<DetailImage[]>}
   */
  getImages(): Observable<DetailImage[]> {
    return this._http.get<DetailImage[]>(`${this._url}/all.json`);
  }

}