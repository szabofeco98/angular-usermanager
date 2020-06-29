import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserListController} from "../../controller/user-list-controller";
import {MatDialogRef} from "@angular/material/dialog";
import {of} from "rxjs";
import {DialogResult} from "src/app/shared/enums/dialogresult";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public addUserForm: FormGroup;

  constructor(
    private controller: UserListController,
    public dialogRef: MatDialogRef<UserComponent>,
  ) { }

  ngOnInit(): void {
    this.addUserForm = new FormGroup({
      username: new FormControl(null,Validators.required),
      name : new FormControl(null,Validators.required),
      password: new FormControl(null,Validators.required),
    })
  }

  add() {
    console.log(this.addUserForm.value)
    this.controller.registration(this.addUserForm.value).subscribe(value => {
      if(value == 'success'){
        this.dialogRef.close(DialogResult.SUCCESS);

      }else {
        this.dialogRef.close(DialogResult.FAIL);
      }
    },error => {
      this.dialogRef.close(DialogResult.FAIL);
      return of(error);
    });
  }

  onCancel() {
    this.dialogRef.close(DialogResult.CLOSE);
  }
}
