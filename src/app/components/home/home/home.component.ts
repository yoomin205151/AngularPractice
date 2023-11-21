import { Component, Input } from '@angular/core';
import { ApiService } from '../../../service/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  data: any[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.completaData();
  }

  completaData(){
    this.apiService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);
    })
  }
}
