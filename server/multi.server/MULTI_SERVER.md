**MULTI-SERVER**

This server architecture allows the capability to link multiple servers through a router as a proxy server.

There three servers:

* router
* dataServerOne
* dataServerTwo

Open each directory in a separate Terminal/command line instance, and launch the index file with node: `node index`.

To display the UI in a browser:

`http://localhost:8000`

Use a rest client to call the endpoint serverTwo/v1/data:

The response will be:

```
{
    "status":"success",
    "data":{
            "id":"100"
        }
}
```

`http://localhost:8000/serverOne/v1/data?someParam=100`

Use a rest client to call the endpoint serverTwo/v1/data:

`http://localhost:8000/serverTwo/v1/data?someParam=100`

The response will be:

```
{
    "status":"success",
    "data":{
            "id":"100"
        }
}
```
