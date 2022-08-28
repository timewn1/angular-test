import { Injectable } from '@angular/core';
import { VideoGame } from '../../core/models/video-game.model';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { VideoGameService } from '../../core/services/video-game.service';
import { OrderBy } from '../../core/models/filter.model';
import { VideoGamesComponent } from './video-games.component';

@Injectable({
  providedIn: 'root',
})
export class VideoGamesStateService {
  allVideoGames: VideoGame[] = [];

  videoGames: VideoGame[] = [];
  videoGames$: BehaviorSubject<VideoGame[]> = new BehaviorSubject<VideoGame[]>(this.videoGames);

  isLoading = false;
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isLoading);

  constructor(private videoGameService: VideoGameService) {}

  async load() {
    try {
      this.isLoading = true;
      this.isLoading$.next(this.isLoading);

      this.allVideoGames = await firstValueFrom(this.videoGameService.getVideoGames());
      this.videoGames = this.allVideoGames;
      this.videoGames$.next(this.videoGames);
    } catch (e) {
    } finally {
      this.isLoading = false;
      this.isLoading$.next(this.isLoading);
    }
  }

  filter(name: string, score: number, orderBy: OrderBy) {
    this.videoGames = this.allVideoGames
      .filter((item) => {
        if (name) {
          return item.name.toLowerCase().replace(/\s/g, '').includes(name.toLowerCase());
        } else {
          return true;
        }
      })
      .filter((item) => item.rating > (score || 0) * 10)
      .sort((a, b) => {
        switch (orderBy) {
          case OrderBy.Name:
            return a.name > b.name ? 1 : -1;
          case OrderBy.Score:
            return b.rating - a.rating;
          case OrderBy.ReleaseDate:
            return b.first_release_date - a.first_release_date;
          default:
            return 1;
        }
      });
    this.videoGames$.next(this.videoGames);
  }
}
