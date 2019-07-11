/**
 * Information.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    businessHours : {
      type : 'string',
      maxLength : 128
    },
    businessDays : {
      type : 'string',
      maxLength : 128
    },
    description : {
      type : 'ref',
      columnType: 'text',
      maxLength : 280
    },
    phoneNumber : {
      type : 'string',
      maxLength : 15
    },
    tags : {
      type : 'json'
    },
    museum_information_FK : {
      model : 'museum'
    },
    rates : {
      collection : 'rate',
      via : 'information_rate_FK'
    }

  },

};

