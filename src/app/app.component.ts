import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Avoiding Angular duplicate HTTP requests with the RxJs shareReplay operator';  

  ngOnInit(): void {
  }
}
