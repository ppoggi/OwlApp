import { University } from './university';
import { UniversityListVersion }  from './university.list.version';

export class Container {

    dbVersion: UniversityListVersion;
    dbList: University[];

    constructor(version,list){
      this.dbVersion = version;
      this.dbList = list;
    }
};
