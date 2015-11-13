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

## Licensing

This project is licensed under the [MIT license](https://tldrlegal.com/license/mit-license), which means you can use it pretty much anyway you want.

## Contributing

You can fork this [project on GitHub](https://github.com/goldenice/node-conwor), make the changes in your own repo and submit a pull request. I will then consider your changes and most likely merge them.
