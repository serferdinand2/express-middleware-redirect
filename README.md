# Express Middleware Redirect
Redirecting middleware for express.js

<a name="redirectMiddleware"></a>

## redirectMiddleware ⇒
Checks if the original URL is in the redirect data and redirects to the value if it is.
 
**Returns**: Function  

| Param | Type | Description |
| --- | --- | --- |
| redirectData | <code>String</code> \| <code>Object</code> | Object or path to JSON file containing redirect data. |

**Example**  
```js
import redirectMiddleware from '@serferdinand2/express-middleware-redirect'

app.use(redirectMiddleware('./path/to/redirects.json'));
```


