import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ContainerData } from 'src/app/models/container-data.model';
import { ContainerDataService } from 'src/app/services/container-data.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-controle',
  templateUrl: './controle.component.html',
  styleUrls: ['./controle.component.scss'],
  providers: [ContainerDataService]
})
export class ControleComponent implements OnInit {

    registros: ContainerData[];
    containerControl = new FormControl();
    filteredOptions: Observable<ContainerData[]>;

  constructor(
      private containerService: ContainerDataService,
    ){ }

  ngOnInit() {
    this.getAll();
    this.filteredOptions = this.containerControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.cod_iso),
        map(cod_iso => cod_iso ? this._filter(cod_iso) : this.registros.slice())
      );
  }

  displayFn(container: ContainerData): string {
    return container && container.cod_iso ? container.cod_iso : '';
  }

  private _filter(cod_iso: string): ContainerData[] {
    const filterValue = cod_iso.toLowerCase();

    return this.registros.filter(option => option.cod_iso.toLowerCase().indexOf(filterValue) === 0);
  }

  //Adicionando um Novo Container
  async cadastro(cod_iso){
    let container = new ContainerData;
    container.cod_iso = cod_iso
    await this.containerService.post(container).subscribe(container => {console.log(container)}, err => {console.log(err)})
    window.location.reload();
  }
  
  //Recuperar registros de um Container

  getAll(){
    this.containerService.getAll().subscribe(containers => {
      this.registros = containers
    })
  }
  
}