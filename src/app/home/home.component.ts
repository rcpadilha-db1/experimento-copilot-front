import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HomeService } from './home.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NewsList } from './Interfaces/news-response';
import { format } from 'date-fns';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  environment = environment.production;

  newsList!: NewsList[];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getNews().subscribe({
      next: (res) => {
        this.newsList = res.data;
      },
    });
  }

  formatPublishDate(date: string) {
    return format(date, "dd/MM/yyyy, HH:MM'h'");
  }
}
