import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class LocalizacionesService {

    private destroyed$ = new Subject<void>();
   
    constructor(
    ) { }

    public destroy() {
        this.destroyed$.next();
    }
}