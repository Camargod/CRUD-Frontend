export class Admin
{

    constructor(id:number, username : string, pwd:string) 
    {       
        this.id = id;
        this.username = username;
        this.pwd = pwd; 
    }
    id : number;
    username : string;
    pwd : string;
}