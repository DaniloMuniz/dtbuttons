import { Component, OnInit } from '@angular/core';
import { DatatableRender } from './datatable-render';
// import 'datatables.net-buttons/js/buttons.html5';
// import 'datatables.net-buttons/js/buttons.print';
// import * as $ from 'jquery';
// import 'jszip';
// import 'datatables.net';
// import 'datatables.net-buttons';
// import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 
  title = 'dtbuttons';

  public dataTable : any;

  datatableRender :DatatableRender;

  constructor(){
   this.datatableRender = new DatatableRender();
  }

  ngOnInit(): void {
    this.datatableRender.createInstance('#example');
    // this.createInstance('#example');
  }


  //    /**
  //    * createInstance
  //    */
  //   public createInstance(id :string) {
        
  //     const table: any = $(id);
  //     this.dataTable = table.DataTable({
  //             dom: 'Bfrtip',
  //             buttons: [
  //                 'copy', 'excel', 'pdf'
  //             ]
  //         } 
           
  //     );
  //  }
}
