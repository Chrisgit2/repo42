import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

import {BaseObjectGeneratorService} from '../../domain/base-object-generator/base-object-generator.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BaseDomainService<T1> {
  public versionString: string;
  public baseString: string;
  public Endpoint: string;
  public ObjectGenerator: BaseObjectGeneratorService<T1>;
  public constructor(public http: Http) {
    this.versionString = 'v1';
    this.baseString = '/api/';// + this.versionString + '/';

  }
  public getEntries<T>(): Promise<T[]> {
    return this.get<T[]>(this.Endpoint).then(r => {
      return r;
    })
  }
  public getEntryById<T>(id: Number): Promise<T> {
    return this.get<T>(this.Endpoint + '/' + id).then(r => {
      return r;
    })
  }
  public deleteEntry<T>(id: Number): Promise<void> {
    return this.delete<T>(this.Endpoint + '/' + id).then(r => {
      return r;
    });
  }
  public putEntry<T>(entry: T) {
    this.put<T>(this.Endpoint, entry);
  }
  public postEntry<T>(entry: T): Promise<T> {
    return this.post<T>(this.Endpoint, entry).then(r => {
      return r;
    });
  }
  public get<T>(i_Endpoint: string): Promise<T> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.get(i_Endpoint)
      .toPromise()
      .then(response => {
        if (this.ObjectGenerator != null) {
          let checkObject: T1 = response.json() as T1; // Object to check, whether response is an array type
          if (Array.isArray(checkObject)) {
            let res: T1[] = [];
            for (let item of checkObject) {
              let newItem: T1 = this.ObjectGenerator.Generate();
              this.ObjectGenerator.AssignData(newItem,item);
              //Object.assign(newItem,item);
              res.push(newItem);
            }
            return res;
          } else {
          let vari: T1 = this.ObjectGenerator.Generate();
          this.ObjectGenerator.AssignData(vari, response.json());
          //Object.assign(vari, response.json());
          return vari;
          }
        } else {
          return response.json() as T;
        }
      })
      .catch(this.handleError);
  }
  public delete<T>(i_Endpoint: string): Promise<void> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.delete(i_Endpoint, options)
      .toPromise()
      .then(response => {
        return response;
      })
      .catch(this.handleError);
  }
  public post<T>(i_Endpoint: string, entity: T): Promise<T> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(i_Endpoint, JSON.stringify(entity), options)
      .toPromise()
      .then(response => {
        return response.json() as T
      })
      .catch(this.handleError);
  }
  public put<T>(i_Endpoint: string, entity: T) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    this.http.put(i_Endpoint, JSON.stringify(entity), options)
      .toPromise()
      .then(response => {

      })
      .catch(this.handleError);
  }
  protected handleError(error: any) {
    console.error('An error occured', error);
    //return Promise.reject(error);
    return undefined;
  }
}
