class Node {
    constructor(value) {
        this.value = value;
        this.next = this.prev = null;

    }
}

class Sentinel {
    constructor() {
        this.head = new Node();
        this.tail = new Node();
        this.head.next = this.tail;
        this.tail.prev = this.head;

    }

    addToFront(value) {
        const spot = new Node(value);
        spot.next = this.head.next;
        spot.prev = this.head;

        spot.prev.next = spot;
        spot.next.prev = spot;

    }
    addToBack(value) {

        const spot = new Node(value);
        spot.next = this.tail;
        spot.prev = this.tail.prev;

        spot.prev.next = spot;
        spot.next.prev = spot;


    }

    printForward() {
        for (let current = this.head.next; current != this.tail; current = current.next) {
            console.log(current.value);
        }
    }

    search(value) {
        for (let current = this.head.next; current != this.tail; current = current.next) {

            if (value == current.value) {
                return current;
            }

            return null;
        }
    }
    remove(value) {
        const deleteNode = this.search(value);
        if (deleteNode != null) {

            deleteNode.prev.next = deleteNode.next;
            deleteNode.next.prev = deleteNode.prev;

        }


    }
}


const li = new Sentinel();

li.addToBack(3);
li.addToBack(4);
li.addToFront(2);
li.remove(2);
li.printForward();
