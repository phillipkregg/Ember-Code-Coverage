import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('unused-component', 'Integration | Component | unused component', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  let component = this.render(hbs`{{unused-component}}`);

  this.render(hbs`{{unused-component}}`);

  assert.equal(this.$().text().trim(), '');

  //Click on the button
  this.$('.first').click();

  assert.equal(this.$().text().trim(), 'template block text');
});
