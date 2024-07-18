import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  apiUrl: string = environment.apiRepl;

  constructor(private http: HttpClient) {};

  sendCommand(command: string) {
    const payLoad = { command: command };

    this.http.post(this.apiUrl, payLoad).subscribe(response => {
      console.log('Api Response: ', response);
    }, error => {
      console.error('Api Error: ', error);
    });
  }
}