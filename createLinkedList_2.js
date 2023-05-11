

// Create a Linked list

class listNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

function createLinkedList(length) {

    let head = null;
    let tail = null;

    for (let i = 1; i <= length; i++) {

        let node = new listNode(i, null);
        
        if (head === null) {
            head = node;
        }
        else if (tail === null) {
            tail = node;
            head.next = tail;
        }
        else {
            tail.next = node;
            tail = tail.next;
        }
        
    }

    return head;

}

console.log(createLinkedList(5));

let head = createLinkedList(5);
while (head != null) {
    console.log(head.value);
    head = head.next;
}


