import F from 'funcunit';
import QUnit from 'steal-qunit';

F.attach(QUnit);

QUnit.module('djs-chat functional smoke test', {
  beforeEach() {
    F.open('../development.html');
  }
});

QUnit.test('djs-chat main page shows up', function() {
  F('title').text('djs-chat', 'Title is set');
});
