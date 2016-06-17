import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('test-engine/test-component', 'Integration | Component | test engine/test component', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{test-engine/test-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#test-engine/test-component}}
      template block text
    {{/test-engine/test-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
