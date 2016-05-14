## Generating Factory Services
Following a good practice allows us to guarantee certain things. We can take advantage of these guarantees and use a task to automate things. Because the components we make will almost always have the same structure, we can generate this boilerplate for you. Boilerplate includes:

* Factory folder
* Factory entry file which will `import` all of its dependencies
* Factory _ng_ file, or module file will will also `import` its dependencies
* Factory service
* Factory spec with passing tests already written

To generate a factory, we must use the `gulp factory --name [factoryname]` task.

```
    gulp factory --name [factoryName]
```

The `--name` (REQUIRED) flag is the name of the factory you want to create. Be sure to be unique, or it will override an existing factory.


The factory will be created by default on the root of `client/app/services`.

We can change this by passing in the `--parent` flag.

You can pass in a path relative to `client/app/services/` and your factory will be made there.

So running `gulp factory --name signup --parent auth` will create a `signup` component at `client/app/services/auth/signup`.

Running `gulp factory --name footer --parent ../common` will create a `footer` component at `client/app/common/footer`.

Because `--name` is used to create folder name too, use camel or snakeCase and stay consistent.
