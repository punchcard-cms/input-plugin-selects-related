/**
 * selects-related Input Plugin
 *
 *
 * Input Plugin for a two select inputs with related data
 */
const validation = require('./lib/validation.js');

/**
 * Single selects-related Input Plugin
 * @module selectsRelatedInputPlugin
 */
module.exports = {
  name: 'selects-related',
  description: 'Input Plugin for a two select inputs with related data',
  validation: {
    selectsRelatedValidation: validation,
  },
  inputs: {
    selectsRelated: {
      validation: {
        function: 'selectsRelatedValidation',
        on: 'change',
      },
      label: 'selects-related',
      placeholder: 'selects-related',
      settings: {
        empty: false,
      },
    },
  },
  html: '<label for="{{selectsRelated.id}}">{{selectsRelated.label}}</label><input type="text" id="{{selectsRelated.id}}" name="{{selectsRelated.name}}" value="{{selectsRelated.value}}" placeholder="{{selectsRelated.placeholder}}" />',
};
