import { Component, OnInit } from '@angular/core';
import { Banda } from '../banda';
import { BandaService } from '../banda.service';

@Component({
  selector: 'app-banda-list',
  templateUrl: './banda-list.component.html',
  styleUrls: ['./banda-list.component.css']
})
export class BandaListComponent implements OnInit {

  bandas: Array<Banda> = [];
  constructor(private bandaService: BandaService) { }
  bandaMasAntigua: string  = "";
  antiguedad: number = 0;

  selectedBanda!: Banda;
  selected: Boolean = false;

  onSelected(banda: Banda): void {
    this.selected = true;
    this.selectedBanda = banda;
  }

  getBandas(): void {
    this.bandaService.getBandas().subscribe((bandas) => {
      this.bandas = bandas;
      for (var val of this.bandas) {
        if ((2022 - val.foundation_year) > this.antiguedad) {
          this.bandaMasAntigua = val.name;
          this.antiguedad = (2022- val.foundation_year);
        }
      }
    });
  }

  ngOnInit() {
    this.getBandas();
  }

}
