import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './sqldb.datasource.json';

export class SqldbDataSource extends juggler.DataSource {
  static dataSourceName = 'sqldb';

  constructor(
    @inject('datasources.config.sqldb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
