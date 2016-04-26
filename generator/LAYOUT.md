## Generating Layouts
Following a good practice allows us to guarantee certain things. We can take advantage of these guarantees and use a task to automate things. Because the components we make will almost always have the same structure, we can generate this boilerplate for you. Boilerplate includes:

* Layout folder
* Layout entry file which will `import` all of its dependencies
* Layout _ng_ file, or module file will will also `import` its dependencies
* Layout route
* Layout template
* Layout scss
* Layout spec with passing tests already written

To generate a layout, we must use the `gulp layout --name layoutName --route routeName` task.

The `--name` (REQUIRED) flag is the name of the view you want to create. Be sure to be unique, or it will override an existing view.

The `--route` (OPTIONAL) flag is the url of the route. If a rpute is not provided, it will be created using the `--name` flag.

The `--redirectTo` (OPTIONAL) flag is the default url of the route. If a redirectTo is not provided, it will be created using the `--name` flag.


The layout will be created by default on the root of `client/app/layouts`.

We can change this by passing in the `--parent` flag.

You can pass in a path relative to `client/app/layouts/` and your layout will be made there.

So running `gulp layout --name signup --parent auth` will create a `signup` component at `client/app/layouts/auth/signup`.

Running `gulp layout --name footer --parent ../common` will create a `footer` component at `client/app/common/footer`.

Because `--name` is used to create folder name too, use camel or snakeCase and stay consistent.
