import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, SelectControlValueAccessor } from '@angular/forms';
import { DesertService } from 'src/app/modules/api/services/desert/desert.service';

@Component({
  selector: 'app-desert-select',
  templateUrl: './desert-select.component.html',
  styleUrls: ['./desert-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DesertSelectComponent),
      multi: true,
    },
  ],
})
export class DesertSelectComponent
  extends SelectControlValueAccessor
  implements OnInit
{
  public deserts: {
    id: number;
    name: string;
  }[] = [];

  constructor(
    _renderer: Renderer2,
    _elementRef: ElementRef,
    private desertService: DesertService
  ) {
    super(_renderer, _elementRef);
  }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.desertService.getAll().subscribe((response) => {
      this.deserts = response.data.map((desert) => ({
        id: desert.id,
        name: desert.name,
      }));
    });
  }
}
