import { Component, Input, OnInit } from '@angular/core';

import { VideoGame } from '../../../core/models/video-game.model';

@Component({
  selector: 'app-video-game-list-item',
  templateUrl: './video-game-list-item.component.html',
  styleUrls: ['./video-game-list-item.component.scss'],
})
export class VideoGameListItemComponent implements OnInit {
  @Input() videoGame: VideoGame;

  constructor() {}

  ngOnInit(): void {}
}
