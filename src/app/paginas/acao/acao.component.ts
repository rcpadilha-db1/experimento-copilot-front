import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IsearchData } from '../../interface/search.interface';
import { SearchService } from '../../service/search.service';
import { MatSortModule } from '@angular/material/sort';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-acao',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSortModule,
    MatTableModule,
    RouterLink,
  ],
  templateUrl: './acao.component.html',
  styleUrl: './acao.component.scss',
})
export class AcaoComponent implements OnInit {
  displayColumns = ['symbol', 'name', 'type'];
  dataSource = new MatTableDataSource<IsearchData>();

  formulario!: FormGroup;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.carregarFormulario();
  }

  public pesquisar() {
    if (this.formulario.valid) {
      this.searchService
        .listar(this.formulario.get('search')?.value)
        .subscribe((response) => {
          this.dataSource = new MatTableDataSource(response.data);
        });
    }
  }

  private carregarFormulario() {
    this.formulario = new FormGroup({
      search: new FormControl('', Validators.required),
    });
  }
}
