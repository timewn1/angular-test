import { Component, OnInit } from '@angular/core';

import { VideoGamesStateService } from './video-games-state.service';

@Component({
  selector: 'app-video-games',
  templateUrl: './video-games.component.html',
  styleUrls: ['./video-games.component.scss'],
})
export class VideoGamesComponent implements OnInit {
  videoGames$ = this.videoGameStateService.videoGames$;
  isLoading$ = this.videoGameStateService.isLoading$;

  constructor(private videoGameStateService: VideoGamesStateService) {}

  ngOnInit(): void {
    this.videoGameStateService.load();
  }
}
