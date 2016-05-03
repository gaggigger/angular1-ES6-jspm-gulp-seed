**TRANSLATION**

Install the following modules with jspm:

```
jspm install angular-cookies
jspm install angular-sanitize
jspm install angular-translate
jspm install angular-translate-loader-static-files
jspm install angular-translate-storage-cookie
jspm install angular-translate-storage-local

```

then import this config

```
import configTranslation from 'config.translation';

let layoutModule = angular.module('app.configs', [
    configTranslate.name
]);

```
