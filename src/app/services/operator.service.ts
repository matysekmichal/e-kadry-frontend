import {Injectable} from '@angular/core';
import {ResourceService} from './resource.service';
import {Operator} from '../components/operator/operator.entity';

@Injectable({
  providedIn: 'root'
})
export class OperatorService extends ResourceService<Operator>{
  url = 'operators';
}
