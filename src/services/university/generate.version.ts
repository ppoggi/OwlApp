import { UniversityListVersion } from './university.list.version';

export class VersionGenerator {

  version:UniversityListVersion;

  constructor(index){

    this.version = { index:index };
  }
   getVersion(){

     return this.version;
   }
};
