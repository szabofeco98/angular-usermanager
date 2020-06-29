import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {UserListController} from '../../controller/user-list-controller';
import {UserDto} from '../../dto/user-dto';
import {MatDialog} from "@angular/material/dialog";
import {AddressDialogComponent} from "../address-dialog/address-dialog.component";
import {UserComponent} from "../user/user.component";
import {DialogResult} from "../../../shared/enums/dialogresult";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'name', 'username', 'action'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  public users: UserDto[];
  private sortableItem = 'id';
  private sortType = 'asc';
  public num;


  constructor(private userListController: UserListController,
              public dialog: MatDialog,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.paginator.pageSize = 5;
    this.getUsers();
    this.getItemCount();
    console.log(this.sort);
  }

  getUsers(): void {
    this.userListController.getUsers(this.paginator.pageIndex + '', this.paginator.pageSize + '', this.sortableItem, this.sortType).subscribe(value => {
        this.users = value;
      }
    );
  }

  pageChange() {
    console.log(this.paginator.pageSize);
    this.getUsers();
  }

  onSotrt(event) {
    this.sortableItem = event.active;
    this.sortType = event.direction;
    this.getUsers();

  }

  getItemCount() {
    console.log('itt');
    this.userListController.getUserCount().subscribe(
      value => {
        console.log(value);
        this.num = value;
      }
    );
  }

  onUserEdit(element: UserDto) {
    const dialogRef = this.dialog.open(AddressDialogComponent);
    console.log(element);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }

  openAddUserDialog() {
    const dialogRef = this.dialog.open(UserComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result == DialogResult.SUCCESS) {
        this.getItemCount();
        this._snackBar.open("Success","OK" ,{
          duration: 2000,
        });
      }

      if (result == DialogResult.CLOSE){
        this._snackBar.open("Closed","OK" ,{
          duration: 2000,
        });
      }

      if (result == DialogResult.FAIL){
        this._snackBar.open("Server Error","OK" ,{
          duration: 2000,
        });
      }


    })
  }
}
