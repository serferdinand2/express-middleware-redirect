# Express Middleware Redirect
Redirecting middleware for express.js

<a name="redirectMiddleware"></a>

## redirectMiddleware ⇒
Checks if the original URL is in the redirect data and redirects to the value if it is.

**Kind**: global variable  
**Returns**: Function  

| Param | Type | Description |
| --- | --- | --- |
| redirectData | <code>String</code> \| <code>Object</code> | Object or path to JSON file containing redirect data. |

**Example**  
```js
app.use(redirectMiddleware('./path/to/redirects.json'));
```


