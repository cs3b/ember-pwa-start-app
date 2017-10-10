import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(), 
  actions: {
    addItem() {
      let item = this.getProperties('name', 'category', 'imageUrl', 'since');

      this.get('store').createRecord('item', item)
      .save()
      .then(() => this._resetForm());
    },
  },
  _resetForm() {
    this.setProperties({
      name: null,
      category: null,
      imageUrl: null,
      since: null,
    });
  },
});
