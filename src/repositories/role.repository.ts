import {inject} from '@loopback/core';

import {SqldbDataSource} from '../datasources';
import {Role} from '../models';
import {DefaultSoftCrudRepository} from './default-soft-crud.repository.base';

export class RoleRepository extends DefaultSoftCrudRepository<
  Role,
  typeof Role.prototype.id
> {
  constructor(@inject('datasources.sqldb') dataSource: SqldbDataSource) {
    super(Role, dataSource);
  }
}
