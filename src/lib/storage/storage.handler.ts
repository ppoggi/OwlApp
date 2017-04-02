import { University } from '../../services/university/university';

export class StorageHandler {

  constructor(){}

  updateUniversityList(updatedObj:University,oldList:University[]){

    const id = updatedObj.id;
    let updatedList: University[];

    console.log('oldArray', oldList,'updatedObj: ', oldList);

    for(let i=0; i < oldList.length; i++ ){
      if(oldList[i].id == id){
         updatedList= oldList.slice();
         updatedList[i] = updatedObj;
         return updatedList;
       }    
    }
    return oldList;
  }
}
