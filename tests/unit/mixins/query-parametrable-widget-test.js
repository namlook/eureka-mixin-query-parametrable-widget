import Ember from 'ember';
import QueryParametrableWidgetMixin from 'eureka-mixin-query-parametrable-widget/mixins/query-parametrable-widget';

module('QueryParametrableWidgetMixin');

// Replace this with your real tests.
test('it works', function() {
  var QueryParametrableWidgetObject = Ember.Object.extend(QueryParametrableWidgetMixin);
  var subject = QueryParametrableWidgetObject.create();
  ok(subject);
});
