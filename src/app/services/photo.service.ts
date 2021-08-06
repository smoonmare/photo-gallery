import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: UserPhoto[] | any = [];

  constructor() { }

  private async savePicture(cameraPhoto: Photo) {}

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri, // file-based data; provides best perfomance
      source: CameraSource.Camera, // automatically take a new photo with camera
      quality: 100 // highest quality (0 to 100)
    });

    // Save the picture and add it to collection
    const savedImageFile = await this.savePicture(capturedPhoto);
    this.photos.unshift(savedImageFile);
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath: string;
}