import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VideoGamesRoutingModule } from './video-games-routing.module';
import { VideoGamesComponent } from './video-games.component';

import { SharedModule } from '../../shared/shared.module';

import { VideoGamesStateService } from './video-games-state.service';

import { VideoGameListItemComponent } from './video-game-list-item/video-game-list-item.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [VideoGamesComponent, VideoGameListItemComponent, FilterComponent],
  imports: [CommonModule, VideoGamesRoutingModule, FormsModule, ReactiveFormsModule, SharedModule],
  providers: [VideoGamesStateService],
})
export class VideoGamesModule {}
