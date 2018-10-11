import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  first_gaugeValue = 27;
  first_gaugeLabel = 'Product';
  first_gaugeAppendText = '%';

  second_gaugeValue = 3;
  second_gaugeLabel = 'Runway';
  second_gaugeAppendText = 'months';

  third_gaugeValue = 24;
  third_gaugeLabel = 'Conversion';
  third_gaugeAppendText = '%';

  forth_gaugeValue = 100;
  forth_gaugeLabel = 'Engagement';
  forth_gaugeAppendText = '%';

  constructor() {
  }

  ngOnInit() {
  }

}
