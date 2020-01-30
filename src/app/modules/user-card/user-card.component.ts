import { Component, Input, OnInit } from "@angular/core";
import { User } from '../../entities/user';

@Component({
    selector:"user-card",
    styleUrls:["./user-card.component.scss"],
    templateUrl:"./user-card.component.html"
})

export class UserCardComponent implements OnInit
{
    @Input() user : User;

    ngOnInit()
    {
    }
}