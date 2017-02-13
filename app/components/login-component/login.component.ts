import { Component } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");

@Component({
  selector: "app-login",
  template: `
    <StackLayout>
      <TextField hint="Email"></TextField>
      <TextField hint="Password"></TextField>
      <GridLayout columns="*, *" height="40">
        <Button row="0" col="0" tap="login()" text="Login"></Button>
        <Button row="0" col="1" text="Register"></Button>
      </GridLayout>
    </StackLayout>
  `
})
export class LoginComponent {
  // Your TypeScript logic goes here
  login(){
    console.log("Login");
  }
}
