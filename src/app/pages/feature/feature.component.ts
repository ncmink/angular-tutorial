import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  url = "http://www.mocky.io/v2/5b52f5322f0000fb0a3bb672";
  datas: any;
  show: Boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe( data => {
      if(data){
        console.log(data);
        this.datas = data;
        this.show = true;
      }
    })
  }

}
