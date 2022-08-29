import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';

import { VideoGame } from '../../core/models/video-game.model';
import { VideoGameService } from '../../core/services/video-game.service';
import { OrderBy, Sort } from '../../core/models/filter.model';

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

  filter(name: string, score: number, orderBy: OrderBy, sort: Sort) {
    this.videoGames = this.allVideoGames
      .filter((item) => {
        if (name) {
          return item.name.toLowerCase().replace(/\s+/g, ' ').includes(name.toLowerCase());
        } else {
          return true;
        }
      })
      .filter((item) => item.rating > (score || 0) * 10)
      .sort((a, b) => {
        const direction = sort === Sort.Ascending ? 1 : -1;
        switch (orderBy) {
          case OrderBy.Name:
            return (a.name > b.name ? 1 : -1) * direction;
          case OrderBy.Score:
            return (b.rating - a.rating) * direction;
          case OrderBy.ReleaseDate:
            return (b.first_release_date - a.first_release_date) * direction;
          default:
            return 1;
        }
      });
    this.videoGames$.next(this.videoGames);
  }
}
