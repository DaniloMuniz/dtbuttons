import 'datatables.net-buttons/js/buttons.flash';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';
import * as $ from 'jquery';
import 'jszip';
import 'datatables.net';
import 'datatables.net-buttons';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export class DatatableRender {

    public dataTable : any;

    /**
     * createInstance
     */
    public createInstance(id :string) {
        
        const table: any = $(id);
        this.dataTable = table.DataTable(
            {
                dom: 'Bfrtip',
                buttons: [
                    'copy', 'excel', 'pdf'
                ]
            } 
             
        );
     }
}
