import { DataSource } from '@angular/cdk/collections';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Categoria } from '../categorias.model';
import { Component } from '@angular/core';

// TODO: replace this with real data from your application

/**
 * Data source for the ProductTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
@Component({
  template: ''
})
export class CategoriasGetDataSource extends DataSource<Categoria> {
  data: Categoria[] = [];

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Categoria[]> {

    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    return merge(observableOf(this.data))
      .pipe(map(() => {
        return ([...this.data]);
      }));
  }
  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void { }

}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
