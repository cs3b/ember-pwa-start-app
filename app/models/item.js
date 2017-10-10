import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  category: DS.attr('string'),
  imageUrl: DS.attr('string'),
  since: DS.attr('string')
});
