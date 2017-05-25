import Ember from 'ember';

export default Ember.Controller.extend({
    myAction: function() {
        console.log(this.get('label'));
    }
});
