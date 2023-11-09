import { Component, OnInit } from '@angular/core';

import { DesertService } from '../../../api/services/desert/desert.service';

type Desert = {
  id: number;
  name: string;
};

@Component({
  selector: 'app-desert',
  styleUrls: ['./desert.component.scss'],
  templateUrl: './desert.component.html',
})
export class DesertComponent implements OnInit {
  public deserts: Desert[] = [];

  constructor(private desertService: DesertService) {}

  ngOnInit(): void {
    this.getAll();
  }

  public create(name: string): void {
    this.desertService.create(name);
  }

  public getAll(): void {
    this.desertService.getAll({}).subscribe((response) => {
      this.deserts = response.data.map((desert) => ({
        id: desert.id,
        name: desert.name,
      }));
    });
  }
}
