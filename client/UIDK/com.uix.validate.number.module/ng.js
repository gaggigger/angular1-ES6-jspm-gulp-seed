import angular from 'angular';
import ComUixValidateNumberFactory from './com.uix.validate.number.factory';

let ComUixValidateNumberModule = angular.module('com.uix.validate.number', []);

ComUixValidateNumberFactory.factory.$inject = ['$log'];
ComUixValidateNumberModule.factory('ComUixValidateNumberFactory', ComUixValidateNumberFactory.factory);

export default ComUixValidateNumberModule;
