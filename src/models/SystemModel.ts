import { IModel } from './IModel';
import Db from './Db';

export class SystemModel implements IModel {

  all(callback: any) : any {
    return Db.query("select id, CONVERT(data USING utf8) data from systems", callback);
  }

}
