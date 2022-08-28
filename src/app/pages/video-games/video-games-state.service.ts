import { Injectable } from '@angular/core';
import { VideoGame } from '../../core/models/video-game.model';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { VideoGameService } from '../../core/services/video-game.service';

@Injectable({
  providedIn: 'root',
})
export class VideoGamesStateService {
  videoGames: VideoGame[] = [];
  videoGames$: BehaviorSubject<VideoGame[]> = new BehaviorSubject<VideoGame[]>(this.videoGames);

  isLoading = false;
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isLoading);

  constructor(private videoGameService: VideoGameService) {}

  async load() {
    try {
      this.isLoading = true;
      this.isLoading$.next(this.isLoading);

      this.videoGames = await firstValueFrom(this.videoGameService.getVideoGames());
      this.videoGames$.next(this.videoGames);
    } catch (e) {
    } finally {
      this.isLoading = false;
      this.isLoading$.next(this.isLoading);
    }
  }
}
