import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoGamesRoutingModule } from './video-games-routing.module';
import { VideoGamesComponent } from './video-games.component';

@NgModule({
  declarations: [VideoGamesComponent],
  imports: [CommonModule, VideoGamesRoutingModule],
})
export class VideoGamesModule {}
