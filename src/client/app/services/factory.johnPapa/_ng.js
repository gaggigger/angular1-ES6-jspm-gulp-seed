import angular from 'angular';
import JohnPapaFactory from './johnPapa.factory';


let johnPapaFactoryModule = angular.module('factory.johnPapa', [])
    .factory('johnPapaService', JohnPapaFactory);

export default johnPapaFactoryModule
