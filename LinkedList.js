class Node {
    value; 
    next;
    constructor(value){
    this.value = value;
    this.next = null;}
}



class List {

    head;
    tail;
    constructor(){
    this.head = null;
    this.tail = null;
}
    add (value){
        //create a new node
        const newNode = new Node (value);
        if(this.head == null)
            this.head = newNode;
        else 
          this.tail.next = newNode;            
        this.tail = newNode;
    }

    print(){

        for(let current = this.head; current != null; current = current.next)
            console.log(current.value);

    }
}


const l = new List ();

l.add(5);
l.add(6);


l.add(7);
l.add(8);

l.print();