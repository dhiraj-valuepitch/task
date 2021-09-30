import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';  
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-screentwo',
  templateUrl: './screentwo.component.html',
  styleUrls: ['./screentwo.component.css']
})
export class ScreentwoComponent implements OnInit {
  
  @ViewChild('TABLE', { static: false }) TABLE: ElementRef;  
  title = 'Excel';  


  editField:any;
  data: any = []

  addheaders = new FormGroup({
    header: new FormControl("", Validators.required)
  })
  addHeaders(){
    this.data.push(this.addheaders.value.header)
    this.addheaders.reset(this.addheaders.value.header=="");
    console.log(this.data);
    
  }



  constructor() { }
 
  ExportTOExcel() {  
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);  
    const wb: XLSX.WorkBook = XLSX.utils.book_new();  
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');  
    XLSX.writeFile(wb, 'ScoreSheet.xlsx');  
    console.log("inside excel"+this.data);
    
  }

  updateList(id: number,property:any, event: any){
    const editField=event.target.textContent;
    this.data[id]=editField;
    
  }
  changeValue(id: number, property:any , event: any){
    this.editField=event.target.textContent;
  }

  removeField(id:any){
    const dd = [...this.data];
    dd.splice(id,1);
    this.data =dd;
    // console.log(this.data);
    
  }


  ngOnInit(): void {
  }

}
