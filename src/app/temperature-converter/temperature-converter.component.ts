import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature-converter',
  templateUrl: './temperature-converter.component.html',
  styleUrls: ['./temperature-converter.component.css']
})
export class TemperatureConverterComponent implements OnInit {

  isNaN: Function = Number.isNaN
  parseFloat: Function = Number.parseFloat

  C: string = ''
  F: string = ''

  onGradeKey(event: any) {
    this.C = event.target.value;
  }
  onFarenheitKey(event: any) {
    this.F = event.target.value;
  }
  handleChangeGrades = () => (
    ((+(this.F) - 32) * 5 / 9).toFixed(1)
  )
  handleChangeFarenheit = () => (
    (+(this.C) * 9 / 5 + 32).toFixed(1)
  )


  constructor() {

  }

  ngOnInit(): void { }
}
