import {Injectable} from '@angular/core';
import {PkzpPosition} from './pkzp-position.entity';
import {ResourceService} from '../../services/resource.service';

@Injectable({
  providedIn: 'root'
})
export class PkzpPositionService extends ResourceService<PkzpPosition> {
  url = 'pkzp-positions';
}
