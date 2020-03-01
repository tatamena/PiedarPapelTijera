import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private list = [
    {
      id:5,
      name:"Aang",
      habilidad:"Maestro aire",
      foto:"https://vignette.wikia.nocookie.net/avatar/images/5/57/Aang_%28piloto%29.png/revision/latest/top-crop/width/360/height/450?cb=20130709213322&path-prefix=es",
      age:112
    },
    {
      id:4,
      name:"Katara",
      habilidad:"Maestra agua",
      foto:"https://theblueraft.files.wordpress.com/2010/08/katara1.png?w=700",
      age:14
    },
    {
      id:3,
      name:"Toph",
      habilidad:"Maestra tierra",
      foto:"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-Avatar-The-Last-Airbender-Jessie-Flower.jpg",
      age:12
    },
    {
      id:2,
      name:"Zuko",
      habilidad:"Maestro fuego",
      foto:"https://i.pinimg.com/originals/9a/b4/98/9ab4984c0d9c15cec6df1863202262da.jpg",
      age:16
    },
    {
      id:1,
      name:"Appa",
      habilidad:"Volar",
      foto:"https://i.pinimg.com/originals/c7/c0/b2/c7c0b21be57960df1bc27d7f066763e6.jpg",
      age:115
    }
  ];

  constructor() { }

  user(id: number){
return this.list.find(it => it.id == id)
  }

  get users(): object[]{
    return this.list;
  }
}
