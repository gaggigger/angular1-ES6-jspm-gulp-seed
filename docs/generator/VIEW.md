## Generating Views
Following a good practice allows us to guarantee certain things. We can take advantage of these guarantees and use a task to automate things. Because the components we make will almost always have the same structure, we can generate this boilerplate for you. Boilerplate includes:

* View folder
* View entry file which will `import` all of its dependencies
* View _ng_ file, or module file will will also `import` its dependencies
* View routes
* View controller
* View template
* View scss
* View spec with passing tests already written

To generate a view, we must use the `gulp view --name viewName --route routeName --layout layoutName` task.

To generate a layout, view:


```
    gulp view --name [name] --route [route] --layout [layoutName]
    
    # for example
    
    gulp view --name test --route admin --layout layoutHome
```

The `--name` (REQUIRED) flag is the name of the view you want to create. Be sure to be unique, or it will override an existing view.

The `--layout` (REQUIRED) flag is the name of the layout state you want to reference as the parent state. This state must exist.

The `--route` (OPTIONAL) flag is the url of the route. If a rpute is not provided, it will be created using the `--name` flag.


The view will be created by default on the root of `client/app/views`.

We can change this by passing in the `--parent` flag.

You can pass in a path relative to `client/app/views/` and your view will be made there.

So running `gulp view --name signup --parent auth` will create a `signup` component at `client/app/views/auth/signup`.

Running `gulp view --name footer --parent ../common` will create a `footer` component at `client/app/common/footer`.

Because `--name` is used to create folder name too, use camel or snakeCase and stay consistent.
