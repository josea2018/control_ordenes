import { Component, OnInit } from '@angular/core';
import { Condition} from '../condition';
import { ConditionService } from '../condition.service';

@Component({
  selector: 'app-conditions-crud',
  templateUrl: './conditions-crud.component.html',
  styleUrls: ['./conditions-crud.component.css']
})
export class ConditionsCrudComponent implements OnInit {

  data: Condition[];
  current_condition: Condition;
  crud_operation = { is_new: false, is_visible: false };
  query: string = '';

  constructor(private service: ConditionService) { }

  ngOnInit() {
    this.service.read(this.query).subscribe(res => {
      //debugger;
      this.data = res.json();
      this.current_condition = new Condition();
    });
  }

  new(){
    this.current_condition = new Condition();
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = true;
  }

  edit(row) {
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = false;
    this.current_condition = row;
  }

  delete(id) {
    this.service.delete(id).subscribe(res => {
      this.crud_operation.is_new = false;
      this.ngOnInit();
    });
  }


  save() {
    if (this.crud_operation.is_new) {
        //debugger;
        this.service.insert(this.current_condition).subscribe(res => {
        this.current_condition = new Condition();
        this.crud_operation.is_visible = false;
        this.ngOnInit();
      });
      return;
    }

    this.service.update(this.current_condition).subscribe(res => {
     this.current_condition = new Condition();
     this.crud_operation.is_visible = false;
     this.ngOnInit();
    });

  }





}
