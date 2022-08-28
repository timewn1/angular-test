import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

import { OrderBy } from '../../../core/models/filter.model';
import { VideoGamesStateService } from '../video-games-state.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  OrderBy = OrderBy;

  form: FormGroup = this.fb.group({
    name: [''],
    score: [0],
    orderBy: [],
  });

  constructor(private fb: FormBuilder, private VideoGamesStateService: VideoGamesStateService) {}

  ngOnInit(): void {
    this.form.valueChanges.pipe(debounceTime(300)).subscribe((value) => {
      const { name, score, orderBy } = value;
      this.VideoGamesStateService.filter(name, score, orderBy);
    });
  }
}
