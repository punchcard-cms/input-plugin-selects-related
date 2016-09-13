'use strict';

/**
 * selects-related Input Plugin
 *
 *
 * Input Plugin for a two select inputs with related data
 */
const validation = require('./lib/validation.js');
const script = require('./lib/script.js');

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
  scripts: {
    selectRelated: script,
  },
  inputs: {
    select1: {
      validation: {
        function: 'selectsRelatedValidation',
        on: 'change',
      },
      script: {
        function: 'selectRelated',
        on: 'change',
      },
      label: 'Select one',
      options: [
        { label: 'One',
          value: 'one',
        },
        { label: 'Two',
          value: 'two',
        },
        { label: 'Three',
          value: 'three',
        },
        { label: 'Four',
          value: 'four',
        },
      ],
      type: 'select',
    },
    select2: {
      validation: {
        function: 'selectsRelatedValidation',
        on: 'change',
      },
      label: 'Select one',
      options: [
        { label: 'One',
          value: 'one',
        },
        { label: 'Two',
          value: 'two',
        },
        { label: 'Three',
          value: 'three',
        },
        { label: 'Four',
          value: 'four',
        },
      ],
      type: 'select',
    },
  },
  html: `<label for="{{select1.id}}">{{select1.label}}</label><select id="{{select1.id}}" name="{{select1.name}}">
      {% for option in select1.options %}<option value="{{option.value}}" {% if option.value == select1.value %}selected{% endif %}>{{option.label}}</option>{% endfor %}
    </select>
      <label for="{{select2.id}}">{{select2.label}}</label><select id="{{select2.id}}" name="{{select2.name}}">
      {% for option in select2.options %}<option value="{{option.value}}" {% if option.value == select2.value %}selected{% endif %}>{{option.label}}</option>{% endfor %}
    </select>`,
};
