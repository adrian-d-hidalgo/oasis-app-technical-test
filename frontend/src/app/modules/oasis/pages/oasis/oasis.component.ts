import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { OasisService } from '../../../api/services/oasis/oasis.service';

type Oasis = {
  id: number;
  name: string;
  water: number;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  desertId: number;
};

@Component({
  selector: 'app-oasis',
  templateUrl: './oasis.component.html',
  styleUrls: ['./oasis.component.scss'],
})
export class OasisComponent implements OnInit {
  public oases: Oasis[] = [];
  public filterForm: FormGroup;

  constructor(private fb: FormBuilder, private oasisService: OasisService) {
    this.filterForm = this.fb.group({
      desert: [''],
      water: [''],
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  public getAll(filters: any = {}) {
    this.oasisService.getAll(filters).subscribe((response) => {
      this.oases = response.data;
    });
  }

  onSubmit() {
    const { desert, water } = this.filterForm.value;
    // TODO: Use EventEmitter with form value
    const filters = {
      desertId: desert ? Number(desert) : undefined,
      water: water ? Number(water) : undefined,
    };
    this.getAll(filters);
  }
}
