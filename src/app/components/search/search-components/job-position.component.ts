import {Component, Injector, OnInit} from '@angular/core';
import {Search} from '../search';
import {JobPosition} from '../../contract/job-position.entity';
import {JobPositionService} from '../../contract/job-position.service';

@Component({
  selector: 'app-job-position',
  templateUrl: '../search.html',
  styleUrls: [
    '../search.scss'
  ]
})
export class JobPositionComponent extends Search<JobPosition> implements OnInit {
  constructor(
    protected injector: Injector,
    public jobPositionService: JobPositionService
  ) {
    super(injector, jobPositionService);
  }
}
