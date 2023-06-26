import { Component, OnInit } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Cobranza, ReporteCobranzas } from '../../models/cobranzas.model'
import { Router } from '@angular/router'

@Component({
  selector: 'app-cobranzas',
  templateUrl: './cobranzas.component.html',
  styleUrls: ['./cobranzas.component.css']
})
export class CobranzasComponent implements OnInit{
  registros: Cobranza[] = []
  selectedDate: string = ''
  //defino ayer para inicializar
  todayDate: Date = new Date()
  yesterdayDate : Date = new Date(this.todayDate.setDate(this.todayDate.getDate()-1))//pido un reporte con la fecha de ayer para inicializar
  yesterdayString: string = this.dateToString(this.yesterdayDate)

  constructor(
    private https: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.selectedDate = this.yesterdayString
    this.getReport()
  }

  logOut(){
    this.router.navigate(['home'])
  }

  dateToString(date: Date){
    const day = date.getDate()
    const month = ((date.getMonth() + 1 > 9)?(date.getMonth() + 1).toString():(date.getMonth() + 1).toString().padStart(2, '0'))
    const year = date.getFullYear()
    const stringifiedDate = `${year}-${month}-${day}`
    return stringifiedDate
  }

  normalizeDate (date:string) {
    const arrayDate = date.split("-")
    return arrayDate[2]+'-'+arrayDate[1]+'-'+arrayDate[0]
  }

  getReport() {

    const url = 'https://api.sandbox.pagos360.com/report/collection/';
    const apiKey = 'NjQwNDMxNGI1YzU0YjllYmVhYjJiZDdmY2E5Y2EyMDg5ZDVlODFmNzRmMDc1OGJmMDY2OTY0NzlhNGJiZWQwNA'
    const date = this.normalizeDate(this.selectedDate)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    })

    this.https.get<ReporteCobranzas>(`${url}${date}`, { headers })
      .subscribe(reporte => {
        reporte.data?this.registros = reporte.data:this.registros = reporte.data
      })
  }
}
