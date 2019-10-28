import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';

export interface PeriodicElement {
  firstname: string;
  lastname: string;
  Company: string;
  City: string;
  ZIP: number;
  State: string;
  Email: string;
  Web: string;
  Age: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  userLog: PeriodicElement[] = [
    {firstname: 'James', lastname: 'Butt', Company: 'Benton John B Jr', City: 'New Orleans', State: 'LA', ZIP: 70116, Email: 'jbutt@gmail.com', Web: 'www.jbutt.com', Age: 70},
    {firstname: 'Josephine', lastname: 'Darajl', Company: 'Chanay Jeffery A Esq', City: 'Brighton', State: 'MI', ZIP: 48116, Email: 'jbutt@gmail.com', Web: 'www.josephine.com', Age: 48},
    {firstname: 'Art', lastname: 'Venere', Company: 'Chanay Jeffery A Esq', City: 'Bridgeport', State: 'NJ', ZIP: 80514, Email: 'art@gmail.com', Web: 'www.art.com', Age: 80},
    {firstname: 'Lenna', lastname: 'Paprocki', Company: 'Feltz Printing Service', City: 'Anchorage', State: 'AK', ZIP: 99501, Email: 'lenna@gmail.com', Web: 'www.lenna.com', Age: 99},
    {firstname: 'Donette', lastname: 'Foller', Company: 'Benton John B Jr', City: 'Hamilton', State: 'OH', ZIP: 45011, Email: 'donette@gmail.com', Web: 'www.donette.com', Age: 70},
    {firstname: 'Hieuo', lastname: 'Tiye', Company: 'Ueyrbm Services', City: 'Kdiiio', State: 'PQ', ZIP: 12345, Email: 'sdbskjdb@gmail.com', Web: 'www.sdbskjdb.com', Age: 45},
    {firstname: 'Ross', lastname: 'Jack', Company: 'Benton John B Jr', City: 'Eljwrleans', State: 'WJ', ZIP: 70116, Email: 'dhcsid@gmail.com', Web: 'www.kghk.com', Age: 98},
    {firstname: 'Monika', lastname: 'Yriou', Company: 'Feltz Printing Service', City: 'Usd Rouos', State: 'NC', ZIP: 76816, Email: 'siefhwo@gmail.com', Web: 'www.jbusdihistt.com', Age: 73},
    {firstname: 'Rachel', lastname: 'Geller', Company: 'Ueyrbm Services', City: 'New Orleans', State: 'EK', ZIP: 98116, Email: 'weiywi@gmail.com', Web: 'www.skdh.com', Age: 74},
    {firstname: 'Joey', lastname: 'Bing', Company: 'Benton John B Jr', City: 'Urei', State: 'IE', ZIP: 87839, Email: 'kshdi@gmail.com', Web: 'www.sdkjhc.com', Age: 87},
    {firstname: 'Jack', lastname: 'Greene', Company: 'Feltz Printing Service', City: 'New Olkdfjrleans', State: 'SJ', ZIP: 25342, Email: 'kshdldsh@gmail.com', Web: 'www.s,dcnk.com', Age: 34},
    {firstname: 'Jhonny', lastname: 'Buffey', Company: 'Chanay Jeffery A Esq', City: 'New Orleans', State: 'UE', ZIP: 89792, Email: 'sdhos@gmail.com', Web: 'www.ksdhci.com', Age: 67}
  ];
  displayedColumns: string[] = ['firstname', 'lastname', 'Company', 'City', 'State', 'ZIP', 'Email', 'Web', 'Age'];
  dataSource = new MatTableDataSource(this.userLog);
  showSelectedUser = false;
  showTable = true;
  userData: string;

  constructor(private router: Router) {}

  ngOnInit(){ }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  showDetailedView(row) {
    this.router.navigate(['/user', row.firstname]);
    this.userData = row;
    this.showSelectedUser = true;
    this.showTable = false;
  }

  showTableMethod(){
    this.showTable = true;
    this.showSelectedUser = false;
  }

  sort(event) {
    let userLog = this.dataSource.data;
    switch(event.srcElement.innerText) {
      case 'First Name':
          userLog.sort((a, b) => (a.firstname > b.firstname) ? 1 : -1);
          break;
      case 'Last Name':
          userLog.sort((a, b) => (a.lastname > b.lastname) ? 1 : -1);
          break;
      case 'Company Name':
          userLog.sort((a, b) => (a.Company > b.Company) ? 1 : -1);
          break;
      case 'City':
          userLog.sort((a, b) => (a.City > b.City) ? 1 : -1);
          break;
      case 'State':
          userLog.sort((a, b) => (a.State > b.State) ? 1 : -1);
          break;
      case 'ZIP':
          userLog.sort((a, b) => (a.ZIP > b.ZIP) ? 1 : -1);
          break;
      case 'Email':
          userLog.sort((a, b) => (a.Email > b.Email) ? 1 : -1);
          break;
      case 'Web':
          userLog.sort((a, b) => (a.Web > b.Web) ? 1 : -1);
          break;
      case 'Age':
          userLog.sort((a, b) => (a.Age > b.Age) ? 1 : -1);
    }
    this.dataSource.data = userLog;
  }

  paginator(slicedTable) {
    this.dataSource.data = slicedTable;
  }
}

