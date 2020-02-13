import { Component, OnInit, Input } from "@angular/core";
import { NotificationsService } from 'angular2-notifications';
import { UserCard } from 'src/app/entities/userCard';

@Component({
    selector:"user-create",
    styleUrls:["./user-create.component.scss"],
    templateUrl:"user-create.component.html"
})
export class UserCreateComponent implements OnInit
{
    @Input() users : Array<UserCard>;
    /**
     *
     */
    constructor() {}

    ngOnInit(): void 
    {
    }
    newUser()
    {
        this.users.push({user:{id:-1,name:"",bio:"",avatar_url:""},isEditing:true,isNew:true})
    }
    delete(i:number)
    {
        this.users[i].user.id = undefined;
    }
}

