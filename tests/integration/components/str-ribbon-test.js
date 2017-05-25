import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('str-ribbon', 'Integration | Component | str ribbon', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{str-ribbon}}`);

  assert.equal(this.$().text().trim(), 'My Cool Ribbon');
});
