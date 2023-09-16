import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {
  name = signal("Angular");


  toggleName() {
    this.name.set("Angular Bolivia")
  }

  update() {
    this.name.update(oldName => oldName + "Bolivia Talk")
  }

  mutate() {
    this.name.mutate(oldName => oldName + "Bolivia Mutate");
  }

}
