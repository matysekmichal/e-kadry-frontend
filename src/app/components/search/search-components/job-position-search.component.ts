import {Component, Injector, OnInit} from '@angular/core';
import icUser from '@iconify/icons-ic/twotone-person';
import icClear from '@iconify/icons-ic/twotone-clear';
import {Search} from '../search';
import {JobPosition} from '../../contract/job-position.entity';
import {JobPositionService} from '../../contract/job-position.service';

@Component({
  selector: 'app-job-position-search',
  templateUrl: '../search-filter.html',
  styleUrls: [
    '../search-filter.scss'
  ]
})
export class JobPositionSearchComponent extends Search<JobPosition> implements OnInit {
  public icIcon = icUser;
  public icClear = icClear;

  constructor(
    protected injector: Injector,
    public jobPositionService: JobPositionService
  ) {
    super(injector, jobPositionService);
  }
}
