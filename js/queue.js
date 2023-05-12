class Queue {
    queue;

    constructor(queue = []) {
        this.queue = queue;
    }

    enqueue(item) {
        this.queue.push(item)
    }

    dequeue() {
        this.queue.shift()
    }

    logQueue() {
        console.log('queue: ', this.queue)
    }
}

const queue = new Queue([1, 2, 3, 4])

queue.enqueue(5)
queue.enqueue(99)
queue.logQueue()
queue.dequeue()
queue.logQueue()



