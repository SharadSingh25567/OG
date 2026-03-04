import { faker, Faker } from "@faker-js/faker";

export class randomdatautil{

    constructor(page){
        this.page=page;

    }

  static  getfirstname(){

        faker.person.firstName();
    }

  static   getlastname(){

        faker.person.lastName();
    }

 static   getzipcode()
    {
        faker.location.zipCode();
    }


}
//module.exports= randomdatagenerate;