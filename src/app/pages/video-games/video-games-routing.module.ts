import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VideoGamesComponent } from './video-games.component';

const routes: Routes = [{ path: '', component: VideoGamesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoGamesRoutingModule {}
