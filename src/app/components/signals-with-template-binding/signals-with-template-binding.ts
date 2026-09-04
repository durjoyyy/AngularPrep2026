import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals-with-template-binding',
  imports: [],
  templateUrl: './signals-with-template-binding.html',
  styleUrl: './signals-with-template-binding.scss',
})
export class SignalsWithTemplateBinding {
  count = signal<number>(0);
  isLoggedIn = signal(false);

  items = signal<string[]>(['Angular', 'React', 'Vue']);

  addItem() {
    this.items.update((items) => [...items, 'Svelte']);
  }

  //role
  role = signal<'admin' | 'user'>('user');
  //default features (user can see these)
  features = signal<string[]>(['Dashboard', 'Profile', 'Settings']);

  makeAdmin() {
    this.role.set('admin');
    this.features.update((f) => [...f, 'Admin Panel', 'User Mangement']);
  }

  makeUser() {
    this.role.set('user');
    this.features.update((f) =>
      f.filter(feature => 
        feature !== 'Admin Panel' && 
        feature !== 'User Mangement'),
    );
  }
}
