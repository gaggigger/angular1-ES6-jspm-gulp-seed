'use strict';

export default function languageToUse($translate, language) {
  'use strict';
  $translate.use(language.getLanguageCode());
}
