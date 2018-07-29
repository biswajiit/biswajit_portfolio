import { Component, OnInit } from '@angular/core';
import { Job } from '../models/job';

@Component({
  selector: 'app-form-cotrol',
  templateUrl: './form-cotrol.component.html',
  styleUrls: ['./form-cotrol.component.css']
})
export class FormCotrolComponent implements OnInit {
  job : Job ;
  constructor() { }

  ngOnInit() {
  }

  submit(){
    console.log("form submited");
    console.log(this.job.id);
    console.log(this.job.name);
  }

}
