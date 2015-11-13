ConWor is a concurrent worker for Node.JS, it is very simple and has no dependencies at all.

## Example

```
var conwor = require('conwor');
var addToQueue = conwor(5, function(item, callback) {
	// Do something asynchronous with item
	callback();
});

addToQueue({ someitem: 'value' });
```

Arguments for the conwor function are the maximum number of concurrent tasks, and the function which is executed to start a task.
