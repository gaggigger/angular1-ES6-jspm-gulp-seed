**INSTALL LODASH**

The es6 version of lodash ( lodash-es ) is installed for the benefit 
of loading only the methjods needed for a project, rather than 
install the entire lodash library. The npm versiion of lodash-es is
throwing errors on import, so the github branch loaded directly.

to install:

```
jspm install github:lodash/lodash@4.11.2-es
```

This will add a map in the jspm.config.js file:

```
"lodash/lodash": "github:lodash/lodash@4.11.2-es"
```

Then to load only the `forOwn` feature, for example:

```
import forOwn from 'lodash-es/forOwn';
```

For convenience, we can shorting the map key to `_`:

```
"_": "github:lodash/lodash@4.11.2-es"
```

Remember to update the version in this key manually if upgrading
lodash.

Then, in your app where you want to use the `forOwn` feature:

```
import forOwn from '_/forOwn';
```
