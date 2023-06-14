import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cobranza, ReporteCobranzas } from '../models/cobranzas.model';


@Component({
  selector: 'app-cobranzas',
  templateUrl: './cobranzas.component.html',
  styleUrls: ['./cobranzas.component.css']
})
export class CobranzasComponent implements OnInit{
  registros: Cobranza[] = [];
  selectedDate: string = '17-10-2022';

  constructor(private https: HttpClient) { }

  ngOnInit() {
    this.getReport();
  }


  getReport() {
    const url = 'https://api.sandbox.pagos360.com';
    const apiKey = 'NjQwNDMxNGI1YzU0YjllYmVhYjJiZDdmY2E5Y2EyMDg5ZDVlODFmNzRmMDc1OGJmMDY2OTY0NzlhNGJiZWQwNA';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    })

    this.https.get<ReporteCobranzas>(`${url}/report/collection/${this.selectedDate}`, { headers })
      .subscribe(data => {
        console.log(data)
        this.registros = data.data
      })
  }
}
