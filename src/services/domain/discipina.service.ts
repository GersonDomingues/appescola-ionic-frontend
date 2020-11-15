import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { DisciplinaDTO } from "../../models/disciplina.dto";
import { Observable } from "RxJs";



@Injectable()
export class DisciplinaService {

    constructor(public http: HttpClient) {
    }

    findAll() : Observable<DisciplinaDTO[]>  {
        return this.http.get<DisciplinaDTO[]>(`${API_CONFIG.baseUrl}disciplinas/1`);
    }
}