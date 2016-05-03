**SINGLE-SERVER**

This server architecture allows contains all endpoints in one server.

Launch the index file with node: `node index`.

Use a rest client to call the endpoint serverOne/v1/data:

`http://localhost:8000/v1/data?someParam=100`

The response will be:

```
{
    "status":"success",
    "data":{
            "id":"100"
        }
}
```
