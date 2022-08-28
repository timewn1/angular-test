import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoGamesRoutingModule } from './video-games-routing.module';
import { VideoGamesComponent } from './video-games.component';

import { VideoGameListItemComponent } from './video-game-list-item/video-game-list-item.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [VideoGamesComponent, VideoGameListItemComponent, FilterComponent],
  imports: [CommonModule, VideoGamesRoutingModule],
})
export class VideoGamesModule {}
