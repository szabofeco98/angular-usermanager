import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {UserListController} from '../../controller/user-list-controller';
import {UserDto} from '../../dto/user-dto';
import {MatDialog} from "@angular/material/dialog";
import {AddressDialogComponent} from "../address-dialog/address-dialog.component";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'name', 'username' , 'action'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  public users: UserDto[];
  private sortableItem = 'id';
  private sortType = 'asc';
  public num;



  constructor(private userListController: UserListController,public dialog: MatDialog) {
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

  }
}
