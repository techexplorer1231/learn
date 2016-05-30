/**
 * User.js
 *
 * @description :: Create a user model with name(type string), employee number(type integer) and designation(type string)
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: 'string',
    employeeNumber: 'integer',
    designation: 'string'
  }
};

