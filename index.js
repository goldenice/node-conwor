/**
 * Generic 'concurrent' worker in javascript
 * @param  {Number}    maxPending       Maximum simultaneous running functions
 * @param  {Function}  func             Function to use
 * @return {Function}                   Adds an item to the queue of things being processed
 */
function concurrentWorker(maxPending, func) {
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
