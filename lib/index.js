
/**
 * Expose `events`.
 */

module.exports = events;

/**
 * Events.
 */

function events(){
  return {
    restrict: 'E',
    scope: {events: '='},
    template: require('./template.html'),
    transclude: true
  };
}

