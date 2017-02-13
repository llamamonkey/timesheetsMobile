import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="Timesheets"></ActionBar>
    <!-- Your UI components go here -->
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  // Your TypeScript logic goes here
}
