class Node{

    value;
    next = null;
    prev = null;
    constructor(value)
    {
        this.value = value;
   }
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
        else {
          this.tail.next = newNode;            
          newNode.prev = this.tail;
        }
        this.tail = newNode;
    }

    printForward(){

        for(let current = this.head; current != null; current = current.next)
            console.log(current.value);

    }

    printBackward(){

        for(let current = this.tail; current != null; current = current.prev)
            console.log(current.value);

    }

    search(value){

        for(let current = this.head; current != null; current = current.next)
                if(current.value == value)
                    return current;
                else return null;
    }

    removeValue(value)
    {
        const foundNode = this.search(value);
        if(null == foundNode)
            return false;
        if(head==tail)
            {
                head = tail = null; 
                return true;
            }
        if(foundNode == head)
         {
            this.head = this.head.next;
            this.head.prev = null;
         }

         if(foundNode == tail)
         {
            this.tail = this.tail.prev;
            this.tail.next = null;
            
         }
        
        foundNode.prev.next = foundNode.next;
        foundNode.next.prev = foundNode.prev;
        console.log(foundNode.value);

        }
    
}



const l = new List ();

l.add(5);
l.add(6);


l.add(7);
l.add(8);

l.printForward();
l.printBackward();