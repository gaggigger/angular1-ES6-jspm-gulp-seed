import template from './<%= name %>.html!text';
import './<%= name %>.css!';

let layout<%= InitialCaseName %>Routes = function($stateProvider, $urlRouterProvider){

    // $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('layout<%= InitialCaseName %>', {
            url: '/<%= route %>',
            template: template,
            redirectTo: 'layout<%= InitialCaseName %>.<%= name %>'
        });
};

export default layout<%= InitialCaseName %>Routes;
