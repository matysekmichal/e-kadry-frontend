import {Injectable} from '@angular/core';
import {SearchService} from '../../services/search.service';
import {JobPosition} from './job-position.entity';

@Injectable({
  providedIn: 'root'
})
export class JobPositionService extends SearchService<JobPosition> {
  url = 'job-positions';
}
