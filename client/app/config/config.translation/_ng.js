/**
 * import './translation/index';
 *
 * angular('app', ['app.translation']);
 */

'use strict';

import angular from 'angular';
import 'angular-cookies';
import 'angular-sanitize';
import 'angular-translate';
import 'angular-translate-loader-static-files';
import 'angular-translate-storage-cookie';
import 'angular-translate-storage-local';

import TranslationConfig from './_ng.config';
import languageToUse from './_ng.run';
import LanguageFactory from './language.factory';

let languageService = angular.module('config.translation', [
    'pascalprecht.translate',
    'ngCookies',
    'ngSanitize'
]);

TranslationConfig.$inject = ['$translateProvider'];
languageService.config(TranslationConfig);

languageToUse.$inject = ['$translate', 'language'];
languageService.run(languageToUse);

LanguageFactory.factory.$inject = ['$locale'];
languageService.factory('language', LanguageFactory.factory);

export default languageService;

// let translation: ng.IModule = angular.module(
//     'app.translation', ['pascalprecht.translate', 'app.translation.language.service']);
//
// translation.config(TranslationConfig).run(languageToUse);
//
// export {translation, languageService};
