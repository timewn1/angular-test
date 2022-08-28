import { TestBed } from '@angular/core/testing';

import { VideoGamesStateService } from './video-games-state.service';

describe('VideoGamesStateService', () => {
  let service: VideoGamesStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoGamesStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
