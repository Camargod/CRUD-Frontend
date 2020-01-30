export class User
{
  /**
   *
   */
  constructor
  (
    name : string,
    bio : string,
    avatar_url : string
  ) 
  {
    this.name = name;
    this.avatar_url = avatar_url;
    this.bio = bio;
  }
  
  public name : string;
  public bio : string;
  public avatar_url : string;
}
