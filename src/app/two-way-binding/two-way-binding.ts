import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  imports: [FormsModule],
  templateUrl: './two-way-binding.html',
  styleUrl: './two-way-binding.scss',
})
export class TwoWayBinding {
  username = 'xdurjoy';

  newName = signal('neha');

  userDetails = signal<{ name: string; age: number }>({
    name: 'Durjoy',
    age: 25,
  });

  updateName(value: string) {
    this.userDetails.update((user) => ({ ...user, name: value }));
  }

  updateAge() {
    this.userDetails.update((user) => ({ ...user, age: user.age+1 }));
  }
}
