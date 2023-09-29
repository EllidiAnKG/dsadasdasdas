class Node { 
    constructor(value) { 
    this.value = value; 
    this.next = null; 
    } 
    } 
    
    class SinglyLinkedList { 
    constructor() { 
    this.head = null; 
    this.length = 0; 
    } 
    
    // Добавляет элемент в самое начало 
    // односвязного списка, другими словами 
    // делает его первым 
    addFront(value) { 
    const newNode = new Node(value); 
    
    if (this.head === null) { 
    this.head = newNode; 
    } else { 
    newNode.next = this.head; 
    this.head = newNode; 
    } 
    } 
    
    // Удаляет первый элемент списка 
    deleteFront() { 
    if (this.head !== null) { 
    this.head = this.head.next; 
    } 
    } 
    
    // Добавляет элемент в конец списка 
    addBack(value) { 
    const newNode = new Node(value); 
    
    if (this.head === null) { 
    this.head = newNode; 
    } else { 
    let current = this.head; 
    while (current.next !== null) { 
    current = current.next; 
    } 
    current.next = newNode; 
    } 
    } 
    
    // Удаляет последний элемент списка 
    deleteBack() { 
    if (this.head === null) { 
    return
    } 
    if (this.head.next === null) { 
    this.head = null; 
    this.tail = null; 
    return
    } 
    
    let current = this.head; 
    let previous = null; 
    
    while (current.next !== null) { 
    previous = current; 
    current = current.next; 
    } 
    
    previous.next = null; // Удаляем последний элемент из списка 
    this.tail = previous; // Обновляем значение tail 
    
    this.length--; 
    } 
    
    // Выводит на экран все значения списка в 
    // правильном порядке (в порядке записи) 
    print() { 
    let current = this.head; 
    let elements = []; 
    
    while (current !== null) { 
    elements.push(current.value); 
    current = current.next; 
    } 
    
    console.log(elements.join(" -> ")); 
    } 
    
    
    //вывод по индексу 
    getValueByIndex(index) { 
    if (index < 0 || index >= this.length) { 
    return null; 
    } 
    
    let current = this.head; 
    for (let i = 0; i < index; i++) { 
    current = current.next; 
    } 
    return current.value 
    } 
    }

const list = new SinglyLinkedList();
list.addFront(5);
list.addBack(4);
list.addFront(3);
list.addBack(1);
list.print()
list.getValueByIndex(0)
list.print()
console.log(list.getValueByIndex(0))


class HighScores {
    constructor() {
        this.scores = new SinglyLinkedList();
        this.maxScores = 10;
    }

    addScore(score) {
        this.scores.addToFront(score);
    }

    removeScore() {
        this.scores.deleteFront();
    }

    printScores() {
        this.scores.print();
    }
}