import {Injector} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ResourceIdInterface} from '../contracts/resource-id.interface';
import {IResourceService} from '../contracts/data-source.interface';
import {MessageService} from '../components/layout/services/message.service';

export abstract class FormTemplate {
  protected route: ActivatedRoute;
  protected router: Router;
  protected messageService: MessageService;
  private _resourceId: string;

  constructor(injector: Injector) {
    this.route = injector.get(ActivatedRoute);
    this.router = injector.get(Router);
    this.messageService = injector.get(MessageService);
    this.resourceId = this.route.snapshot.paramMap.get('id');
  }

  onSubmit(service: IResourceService<object>, resource: object) {
    service.create(resource).subscribe(
      (response) => {
        this.router.navigate(['.', response.id, 'manage']);
      }, (error) => {
        this.messageService.error('Nie można było stworzyć zasobu.');
      }
    );
  }

  deleteResource(service: IResourceService<any>, item: ResourceIdInterface, successCallback = () => {}) {
    this.messageService.confirm('Czy napewno chcesz kontynuować?', null, null, null, () => {
      service.delete(item.id).subscribe(
        (response) => {
          successCallback();
        }, (error) => {
          this.messageService.error('Nie można było usunąć zasobu.');
        }
      );
    });
  }

  get resourceId() {
    return this._resourceId;
  }

  set resourceId(id: string) {
    this._resourceId = id;
  }
}
