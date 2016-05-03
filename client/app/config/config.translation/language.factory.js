'use strict';

const LOCALE = new WeakMap();

export default class LanguageService {
  constructor($locale) {
    LOCALE.set(this, $locale);

    this.localeIdMap = {

      /* German/Deutsch */
      'de'    : 'de',
      'de-at' : 'de',
      'de-de' : 'de',
      'de-li' : 'de',
      'de-lu' : 'de',
      'de-ch' : 'de',

      /* English */
      'en'    : 'en-us',
      'en-gb' : 'en-gb',
      'en-us' : 'en-us',

      /* French */
      'fr'	  : 'fr-fr',
      'fr-fr' : 'fr-fr',
      'fr-be' : 'fr-fr',
      'fr-ca' : 'fr-fr',
      'fr-lu' : 'fr-fr',
      'fr-ch' : 'fr-fr',

      /* Italian */
      'it'	  : 'it',
      'it-it' : 'it',
      'it-ch' : 'it'
    };
  }

  getLanguageCode() {

    let $locale = LOCALE.get(this);
    let localeId = $locale.id;

    // Default to en
    return (localeId.id && this.localeIdMap[localeId.toLowerCase()]) ?
               this.localeIdMap[localeId.toLowerCase()] :
               this.localeIdMap.en;
  }

  static factory($locale) {
    return new LanguageService($locale);
  }


}

