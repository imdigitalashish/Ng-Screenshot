import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Config } from "./urlexport";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  loading = "";
  imageUrl ="";
  constructor(
    private http: HttpClient,
  ) { }

  async onClick(value: string) {
    this.loading = "Please wait";
   
    await this.http.get<Config>(`https://shot.screenshotapi.net/screenshot?token=YOUAPITOKEN&url=${value}`).subscribe((data: Config) => {
      this.imageUrl = data.screenshot;
    });
    this.loading = "";
   
  }
}

