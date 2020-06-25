import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {UserListController} from '../../controller/user-list-controller';
import {UserDto} from '../../dto/user-dto';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'name', 'username'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  public users: UserDto[];
  private sortableItem = 'id';
  private sortType = 'asc';
  public num;



  constructor(private userListController: UserListController) {
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
}
