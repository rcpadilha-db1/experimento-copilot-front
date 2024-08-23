import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ActionsService } from './actions.service';
import { HttpClientModule } from '@angular/common/http';
import { StocksList } from './interfaces/search-action';
import { MatTableModule } from '@angular/material/table';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    RouterModule,
    RouterLink,
  ],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss',
})
export class ActionsComponent {
  stockList: StocksList[] | undefined;
  displayedColumns: string[] = ['symbol', 'name', 'type'];
  dataSource: any;
  constructor(
    private formBuilder: FormBuilder,
    private actionsService: ActionsService
  ) {}

  actionsForm = this.formBuilder.group({
    action: ['', Validators.required],
  });

  handleSearchClick() {
    console.log(this.actionsForm.get('action')?.value);

    if (!this.action) return;

    this.actionsService.searchActions(this.action).subscribe({
      next: (res) => {
        this.stockList = res.data;
        this.dataSource = this.stockList;
      },
    });
  }

  get action() {
    return this.actionsForm.get('action')?.value;
  }
}
