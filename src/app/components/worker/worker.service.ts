import {Injectable} from '@angular/core';
import {ResourceService} from '../../services/resource.service';
import {Worker} from './worker.entity';

@Injectable({
  providedIn: 'root'
})
export class WorkerService extends ResourceService<Worker>{
  url = 'workers';
}
