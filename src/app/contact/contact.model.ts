export class Contacts{
  public firstName: string;
  public lastName: string;
  public email: string;
  public phone: number;
  public status: string;
  public designation: string;  
  public city: string;
  public country: string;  
  public department: string;  
  public state: string;

  constructor(firstName: string, lastName: string, email: string, phone: number, status: string, designation: string, city: string, country: string, department: string, state: string){
     this.firstName = firstName;
     this.lastName  = lastName;
     this.email	= email;
     this.phone = phone;
     this.status = status;
     this.designation = designation;
     this.city = city;
     this.country =  country;
     this.department =  department;
     this.state = state;
  }	 
}