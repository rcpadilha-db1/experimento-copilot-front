import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SearchService } from '../../service/search.service';
import { IquoteMetaData } from '../../interface/search.interface';
import { EMoedas } from '../../enum/moedas.enum';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.scss',
})
export class DetalhesComponent implements OnInit {
  acao!: IquoteMetaData;

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.localizar();
  }

  private localizar() {
    this.searchService
      .localizar(this.route.snapshot.paramMap.get('symbol') ?? '')
      .subscribe((response) => {
        this.acao = response.data[0];
      });
  }

  public formatacaoDeMoeda(moeda: string): string {
    switch (moeda) {
      case EMoedas.USD:
        return '$';
      case EMoedas.BRL:
        return 'R$';
      default:
        return '';
    }
  }

  public variacaoPreco(valor: number): string {
    if (valor > 0) {
      return 'positivo';
    }
    return 'negativo';
  }
}
