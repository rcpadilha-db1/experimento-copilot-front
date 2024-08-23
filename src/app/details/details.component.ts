import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from './details.service';
import { StockInfo } from './interfaces/stocks-infos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  symbol: string | null = null;
  stockInfo: StockInfo | undefined;
  constructor(
    private route: ActivatedRoute,
    private detailsService: DetailsService
  ) {}

  ngOnInit() {
    this.symbol = this.route?.snapshot?.paramMap?.get('symbol');

    if (this.symbol) {
      this.getStocksPrice(this.symbol);
    }
  }

  getStocksPrice(symbol: string) {
    this.detailsService.getStocksPrices(symbol).subscribe({
      next: (res) => {
        console.log(res);
        this.stockInfo = res.data[0];
      },
    });
  }

  isPositive(stockPercentage: number) {
    return stockPercentage > 0;
  }
}
