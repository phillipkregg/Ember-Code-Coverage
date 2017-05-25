import Ember from 'ember';

export default Ember.Component.extend({
    isChecked: false,
  
  	checked: Ember.computed('isChecked', function() {
    	if (this.get('isChecked')) {
      	return 'checked';    
      } else {
      	return '';    
      }
    }),
    
    defaultAction: function() { console.log('default action') },

    isDisabled: false,
    
    actions: {
        defaultAction: Ember.computed('defaultAction', function() {
            let self = this;
            self.get('defaultAction');
        })
    }

    
});
