import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { VideoGame } from '../models/video-game.model';

@Injectable({
  providedIn: 'root',
})
export class VideoGameService {
  constructor(private http: HttpClient) {}

  getVideoGames(): Observable<VideoGame[]> {
    const url = environment.api;
    return this.http.get<VideoGame[]>(url);
  }
}
