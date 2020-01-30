import { Component, OnInit, Input } from "@angular/core";
import { User } from 'src/app/entities/user';

@Component({
    selector:"user-create",
    styleUrls:["./user-create.component.scss"],
    templateUrl:"user-create.component.html"
})
export class UserCreateComponent implements OnInit
{
    @Input() users : any;
    ngOnInit(): void 
    {
    }
}

