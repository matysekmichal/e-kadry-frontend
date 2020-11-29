import {Injectable} from '@angular/core';
import {ResourceService} from '../../services/resource.service';
import {Operator} from './operator.entity';

@Injectable({
  providedIn: 'root'
})
export class OperatorService extends ResourceService<Operator>{
  url = 'operators';
}
