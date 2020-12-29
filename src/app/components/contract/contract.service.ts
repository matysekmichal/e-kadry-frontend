import {Injectable} from '@angular/core';
import {ResourceService} from '../../services/resource.service';
import {Contract} from './contract.entity';

@Injectable({
  providedIn: 'root'
})
export class ContractService extends ResourceService<Contract>{
  url = 'contracts';
}
