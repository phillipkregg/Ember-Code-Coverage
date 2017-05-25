import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        someUnusedAction() {
            alert('sup');
        },

        anotherFunction() {
            alert('another!');
        }
    }
});
