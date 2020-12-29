import {Component, Injector, OnInit} from '@angular/core';
import {IResourceService, ResourceCreatedResponse} from '../contracts/data-source.interface';
import {FormTemplate} from './form.template';

@Component({
  template: ''
})
export abstract class DelegatedFormTemplate<T> extends FormTemplate implements OnInit {
  public resource: T;
  public service: IResourceService<T>;
  private edit = true;
  protected redirect: string | boolean = this.router.url;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    if (this.resourceId) {
      this.edit = false;
      this.getItem(this.resourceId);
    } else {
      this.edit = true;
    }
  }

  getItem(id: string) {
    this.service.get(id).subscribe(resource => this.resource = resource);
  }

  onSubmit() {
    if (this.resourceId) {
      this.updateResource();
    } else {
      this.createResource();
    }
  }

  updateResource(successCallback: () => any = () => {}, errorCallback: () => any = () => {}) {
    this.service.update(this.resourceId, this.resource).subscribe(
      response => {
        this.messageService.toast(response.message);
        successCallback();
      }, error => {
        this.messageService.error('Nie udało się zaktualizowanie zasobu.');
        errorCallback();
      }
    );
  }

  createResource(successCallback: () => any = () => {}, errorCallback: () => any = () => {}) {
    this.service.create(this.resource).subscribe(
      (response: ResourceCreatedResponse) => {
        if (this.redirect !== false) {
          this.router.navigate([this.redirect, response.id, 'manage']).then();
        }
        successCallback();
      }, (error: ResourceCreatedResponse) => {
        this.messageService.error('Nie można było stworzyć zasobu.');
        errorCallback();
      }
    );
  }
}
