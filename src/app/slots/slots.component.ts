import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent implements OnInit {
 slotConfig = {
    "configSlotHours":"01",
    "configSlotMinutes":"0",
    "configSlotPreparation":"0",
    "timeArr": [
       {"startTime":"09:00", "endTime":"17:00"},
    ]
}
  slots: any[];
  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.getSlots(this.slotConfig);
    // this.slots = this.createSlots(this.slotConfig);
  }

  getSlots(slotConfig){
    // this.dataService.createSlots(slotConfig).subscribe(
    //   res => {
    //     this.slots = res;
    //   }
    // ) vermas6
    // S@hubv$14100

    this.slots = this.dataService.createSlots(slotConfig);
  }

}
