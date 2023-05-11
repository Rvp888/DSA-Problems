
// Create a Linked list

class listNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

function createLinkedList(length) {

    let head = null;

    for (let i = 1; i <= length; i++) {
        let node = new listNode(i, null);
        if (head === null) {
            head = node;
        }
        else {
            let temp = head;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = node;
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


