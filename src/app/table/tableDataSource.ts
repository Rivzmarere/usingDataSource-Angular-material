import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {Observable, BehaviorSubject, of} from "rxjs";
import {Users} from "../model/users.model";
import {catchError, finalize} from "rxjs/operators";
import { ServiceService } from "../service.service";



export class LessonsDataSource implements DataSource<Users> {

    private lessonsSubject = new BehaviorSubject<Users[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private Service: ServiceService) {

    }

    loadLessons() {

        this.loadingSubject.next(true);

        this.Service.getAllProducts().pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe(res => this.lessonsSubject.next([]));

    }

    connect(collectionViewer: CollectionViewer): Observable<Users[]> {
        console.log("Connecting data source");
        return this.lessonsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.lessonsSubject.complete();
        this.loadingSubject.complete();
    }

}

