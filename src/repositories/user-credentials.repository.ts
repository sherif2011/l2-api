import {inject} from '@loopback/core';

import {SqldbDataSource} from '../datasources';
import {UserCredentials, UserCredentialsRelations} from '../models';
import {DefaultSoftCrudRepository} from './default-soft-crud.repository.base';

export class UserCredentialsRepository extends DefaultSoftCrudRepository<
  UserCredentials,
  typeof UserCredentials.prototype.id,
  UserCredentialsRelations
> {
  constructor(@inject('datasources.sqldb') dataSource: SqldbDataSource) {
    super(UserCredentials, dataSource);
  }
}
