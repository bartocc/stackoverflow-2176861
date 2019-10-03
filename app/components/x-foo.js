import Ember from 'ember';

export default Ember.Component.extend({
  paste(event) {
    const text = event.originalEvent.clipboardData.getData('Text');
    alert(`you've just pasted the text '${text}'`);
  }
});
