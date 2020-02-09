import { Component, OnInit, Input } from "@angular/core";
import { User } from 'src/app/entities/user';
import { NotificationsService } from 'angular2-notifications';

@Component({
    selector:"user-create",
    styleUrls:["./user-create.component.scss"],
    templateUrl:"user-create.component.html"
})
export class UserCreateComponent implements OnInit
{
    @Input() users : any;
    /**
     *
     */
    constructor(private _notifications: NotificationsService) {}

    ngOnInit(): void 
    {
        console.log(this.users);
    }

    notificate(message:string)
    {
        this._notifications.success("Global :)",message,
        {
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: false,
            clickIconToClose: true
        });
    }
}

