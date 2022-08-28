import { Component, OnInit } from '@angular/core';
import { VideoGame } from '../../core/models/video-game.model';
import { VideoGameService } from '../../core/services/video-game.service';

@Component({
  selector: 'app-video-games',
  templateUrl: './video-games.component.html',
  styleUrls: ['./video-games.component.scss'],
})
export class VideoGamesComponent implements OnInit {
  videoGames: VideoGame[] = [];
  isLoading = false;

  constructor(private videoGameService: VideoGameService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.videoGameService.getVideoGames().subscribe((res) => {
      this.videoGames = res;
      this.isLoading = false;
    });
  }
}
