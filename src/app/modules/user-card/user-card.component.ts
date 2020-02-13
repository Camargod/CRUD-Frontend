import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { User } from '../../entities/user';
import { UserCard } from 'src/app/entities/userCard';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserDataService } from 'src/app/services/userDataService';
import { NotificationsService } from 'angular2-notifications';

@Component({
    selector:"user-card",
    styleUrls:["./user-card.component.scss"],
    templateUrl:"./user-card.component.html"
})

export class UserCardComponent implements OnInit
{
    @Input() userInfo : UserCard;
    @Output() delete : EventEmitter<void> = new EventEmitter();
    updateForm;
    /**
     *
     */
    constructor(private formBuilder: FormBuilder, private _userDataService : UserDataService, private _notifications: NotificationsService) 
    {    
    }
    ngOnInit()
    {
        this.updateForm = this.formBuilder.group(
        {
            name: '',
            bio: ''
        });
    }

    notificate(title:string, message:string)
    {
        this._notifications.success(title,message,
        {
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: false,
            clickIconToClose: true
        });
    }

    notificateError(title:string, message:string)
    {
        this._notifications.success(title,message,
        {
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: false,
            clickIconToClose: true
        });
    }

    async deleteUser()
    {
        try
        {
            if(this.userInfo.isNew)
            {
                this.delete.emit();
            }
            else
            {
                await this._userDataService.delete(this.userInfo.user).subscribe(async e=>
                {
                    this.notificate("Registro deletado",`Usuário ${e.body.name} removido com sucesso`);
                    this.delete.emit();
                });
            }
            
        }
        catch(err)
        {

        }
        
    }
    async updateOrSaveUser()
    {
        try
        {
            if(this.userInfo.user.id != -1)
            {
                await this._userDataService.update(this.updateForm.value).subscribe(async e=>
                {
                    this.notificate("Registro atualizado com sucesso",`Usuário ${e.body.name} atualizado com sucesso`);
                    this.userInfo.isEditing = false;
                    this.userInfo.user = e.body;
                });
            }
            else
            {
                
                await this._userDataService.post(this.updateForm.value).subscribe(async e=>
                {
                    this.notificate("Registro inserido com sucesso",`Usuário ${e.body.name} inserido com sucesso`);
                    this.userInfo.isEditing = false;
                    this.userInfo.user = e.body;
                    this.userInfo.isNew = false;
                });
            }
        }
        catch(err)
        {

        }
    }
}