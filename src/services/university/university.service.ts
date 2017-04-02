import { Injectable } from '@angular/core';
import { UniversityList } from './university.list';
import { VersionGenerator } from './generate.version';
import { Container } from './container';
import { UniversityListVersion }  from './university.list.version';


@Injectable()
export class UniversityService {

  getUniversities(cachedVersion: UniversityListVersion) {
      //api call to get university list version
      let versionGenerator = new VersionGenerator(1);
      let currentVersion = versionGenerator.getVersion();
      let universityContainer: Container;
      
      if( cachedVersion.index !== currentVersion.index){
        universityContainer = new Container(currentVersion, UniversityList);
      }else{
        universityContainer = new Container(cachedVersion, null);
      }

      return universityContainer;
  }
}
