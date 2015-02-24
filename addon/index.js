import Ember from 'ember';

/** Allow a widget to handle query params.
 * The query param is handle via the `queryParam` attribute,
 * and the name is configured in `config.queryParam`.
 *
 * Make sure you actually described the it in controller's `queryParams`.
 */
export default Ember.Mixin.create({

    /** add the `controllerQueryParam` as an alias of the
     *  controller's queryParam. The name of the attribute is
     * taken from `config.queryParam`
     */
    _addControllerQueryParamProperty: function() {
        var queryParam = this.get('config.queryParam');
        if (queryParam) {
            this.reopen({
                controllerQueryParam: Ember.computed.alias('currentController.'+queryParam)
            });
            this.set('queryParam', this.get('controllerQueryParam'));
            this.updateQuery();
        }
     }.on('init'),


    /** if the `controllerQueryParam` changed (url is modified via the back button),
     * update the filterTerm to match the changes and update the query
     */
    _controllerQueryParamObserver: function() {
        var controllerQueryParam = this.get('controllerQueryParam');
        if (this.get('queryParam') !== controllerQueryParam) {
            this.set('queryParam', controllerQueryParam);
            this.updateQuery();
        }
    }.observes('controllerQueryParam'),


    /** when the query has been update,
     *  if the filterTerm doesn't match the
     *  controllerQueryParam, update the later.
     */
    _routeModelQueryObserver: function() {
        var queryParam = this.get('queryParam');
        if (queryParam !== this.get('controllerQueryParam')) {
            this.set('controllerQueryParam', queryParam);
        }
    }.observes('routeModel.query.hasChanged')

});