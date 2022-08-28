import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGameListItemComponent } from './video-game-list-item.component';

describe('VideoGameListItemComponent', () => {
  let component: VideoGameListItemComponent;
  let fixture: ComponentFixture<VideoGameListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoGameListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoGameListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
