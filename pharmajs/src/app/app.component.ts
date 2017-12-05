import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isVisible: Boolean[];
  
  insertDrugMessage: string;
  prescriptionRecords: any[];
  supplierInventory: any[];
  allergyRecord: any[];
  drugInventory: any[];
  doctorPerformance: any[];
  
  constructor(private databaseService: DatabaseService){
    this.insertDrugMessage ="";
    this.isVisible = [true,false,false,false,false,false,false];
  }
  
  makeVisible(functionNum: number){
    let i: any;
    for (i=0; i<this.isVisible.length; i++){
      this.isVisible[i] = false;
    }
    this.isVisible[functionNum] = true;
  }
  
  onInsertDrugOrder(f: NgForm){
    const order = {drugName: f.value.drugName, quantity: f.value.quantity, supplierName: f.value.supplierName};
    this.databaseService.insertDrugOrder(order)
      .subscribe( data => { if(data.success){
        this.insertDrugMessage = "Drug order was successful.";
      } else {
        this.insertDrugMessage = "Drug order failed.";
      }});
  }
  
  onPrescriptionRecords(f: NgForm){
    this.databaseService.getPrescriptionRecords(f.value.drugName)
      .subscribe( prescriptionRecords => this.prescriptionRecords = prescriptionRecords );
  }
  
  onSupplierInventory(f: NgForm){
    this.databaseService.getSupplierInventory(f.value.supplierName)
      .subscribe( supplierInventory => this.supplierInventory = supplierInventory );
  }
  
  onAllergyCheck(f: NgForm){
    this.databaseService.getAllergyCheck(f.value.name)
      .subscribe( allergyRecord => this.allergyRecord = allergyRecord );
  }
  
  onDrugInventory(){
    this.databaseService.getDrugInventory()
      .subscribe( drugInventory => this.drugInventory = drugInventory );
  }
  
  onDoctorPerformance(f: NgForm){
    this.databaseService.getDoctorPerformance(f.value.patientMinimum)
      .subscribe( doctorPerformance => this.doctorPerformance = doctorPerformance );
  }
  
}
