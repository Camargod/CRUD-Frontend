export class User
{
  /**
   *
   */
  constructor
  (
    name : string,
    bio : string,
    avatar_url : string,
    id : number = -1,
  ) 
  {
    this.id = id
    this.name = name;
    this.avatar_url = avatar_url;
    this.bio = bio;
  }
  public id ?: number;
  public name : string;
  public bio : string;
  public avatar_url : string;
}
