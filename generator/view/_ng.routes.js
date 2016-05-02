import controller from './<%= name %>.controller';
import template from './<%= name %>.html!text';

controller.$inject = ['$log'];

let view<%= name %>Routes = function($stateProvider){

    $stateProvider
        .state('layout<%= layout %>.<%= name %>', {
            url: '/<%= route %>',
            views: {
                'content@layout<%= layout %>': {
                    template: template,
                    controller: controller,
                    controllerAs: 'vm',
                    bindToController: true
                }
            }
        });
};

export default view<%= name %>Routes;
