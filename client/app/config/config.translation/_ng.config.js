'use strict';

export default function TranslationConfig($translateProvider) {
  'use strict';

  // Tell the module what language to use by default
  $translateProvider.preferredLanguage('en-us');

  // Tell the module to store the language in the local storage
  $translateProvider.useLocalStorage();

  // sanitizes HTML in the translation text using $sanitize
  // http://angular-translate.github.io/docs/#/guide/19_security
  $translateProvider.useSanitizeValueStrategy('sanitize');
}
