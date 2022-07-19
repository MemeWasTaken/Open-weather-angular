import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/services/http-request.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  myObservable$: any;
  data: any;

  constructor(private rqst: HttpRequestService) {}

  ngOnInit(): void {
    this.myObservable$ = this.rqst.getData(35, 139).subscribe((dataApi) => {
      console.log(dataApi);
      this.data = dataApi;  
    })
  }

}
