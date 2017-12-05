import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DatabaseService {

  constructor(private http: Http) { }

    insertDrugOrder(order){
        return this.http.post('/api/drugOrder/', order)
            .map((response: Response) => {
                let msg = response.json();
                return msg;
            });
    }
    
    getPrescriptionRecords(drugName: string){
        return this.http.get('/api/prescriptionRecords/' + drugName)
            .map((response: Response) => {
                let records = response.json();
                return records;
            });
    }
    
    getSupplierInventory(supplierName: string){
        return this.http.get('/api/supplierInventory/' + supplierName)
            .map((response: Response) => {
                let records = response.json();
                return records;
            });
    }
    
    getAllergyCheck(name: string){
        return this.http.get('/api/allergyCheck/' + name)
            .map((response: Response) => {
                let records = response.json();
                return records;
            });
    }
    
    getDrugInventory(){
        return this.http.get('/api/drugInventory/')
            .map((response: Response) => {
                let records = response.json();
                return records;
            });
    }
    
    getDoctorPerformance(patientMinimum: number){
        return this.http.get('/api/doctorPerformance/' + patientMinimum)
            .map((response: Response) => {
                let records = response.json();
                return records;
            });
    }
}
