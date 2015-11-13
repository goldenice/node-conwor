/**
 * Generic 'concurrent' worker in javascript
 * @param  {Number}    Maximum simultaneous running functions
 * @param  {Function}  Function to use
 * @return {Function}  Adds an item to the queue of things being processed
 */
function concurrentWorker(maxSimultaneous, func) {
    var queue = [];
    var pending = 0;

    function startIfFree() {
        if (pending >= maxPending || queue.length == 0) return;
        pending++;
        func(queue.shift(), function() {
            pending--;
            startIfFree();
        });
    }

    return function(item) {
        queue.push(item);
        startIfFree();
    }
}

module.exports = concurrentWorker;
