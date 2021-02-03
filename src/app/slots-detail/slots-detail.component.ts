import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-slots-detail',
  templateUrl: './slots-detail.component.html',
  styleUrls: ['./slots-detail.component.css']
})
export class SlotsDetailComponent implements OnInit {
  slotDetailForm: FormGroup;
  fname = new FormControl('', [Validators.required]);
  lname = new FormControl('', [Validators.required]);
  phoneno = new FormControl('', [Validators.required]);
  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.slotDetailForm = this.fb.group({
      fname: this.fname,
      lname: this.lname,
      phoneno: this.phoneno
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.getSlotDetail(id);
  }

  submitSlotDetailForm() {
    this.slotDetailForm.value.id = +this.route.snapshot.paramMap.get('id');

    this.dataService.saveSlotDetail(this.slotDetailForm.value).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl('/slots');
      }
    );
  }

  getSlotDetail(id){
       this.dataService.getSlotDetail(id).subscribe(
        res => {
           res.forEach((element) => {
            if (element.id === id) {
              this.slotDetailForm.patchValue({
                fname: element.fname,
                lname: element.lname,
                phoneno: element.phoneno
              });
            }
          });
        }
      );
  }

}
