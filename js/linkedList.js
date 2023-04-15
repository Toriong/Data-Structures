class LinkedList {
    constructor(arr) {
      this.head = null;
      this.tail = null;
      this.nodes = {};
      this.currentNode = "";
      this.wasListCreated = false;
      this.next = () => {};
      this.getCurrentNode = () => {};
      this.consoleCurrentNode = () => {};
      this.createList(arr);
    }
  
    createList(arr) {
      if (this.wasListCreated) {
        console.warn("List was created already.");
        return;
      }
      arr.forEach((val, index) => {
        const nodeName = `node${index + 1}`;
        const pointer = index === arr.length - 1 ? null : `node${index + 2}`;
        const node = { val: val, pointer: pointer, nodeName: nodeName };
        this.nodes[nodeName] = node;
        if (index === 0) {
          this.head = nodeName;
        }
        if (index === arr.length - 1) {
          this.tail = nodeName;
        }
      });
      this.currentNode = this.head;
      this.next = () => {
        const currentNodeObj = this.nodes[this.currentNode];
        if (!currentNodeObj["pointer"]) {
          console.warn("Reached the end of linked list.");
          return;
        }
        this.currentNode = currentNodeObj.pointer;
      };
  
      this.getCurrentNode = () => this.nodes[this.currentNode];
      this.consoleCurrentNode = () => {
        console.log("current node: ", this.nodes[this.currentNode]);
      };
      this.wasListCreated = true;
    }
  }
  
  const NUMS = [1, 2, 3, 4, 5];
  const linkedList = new LinkedList(NUMS);
  
  const currentNode = linkedList.getCurrentNode();
  
  console.log("Before loop: ");
  linkedList.consoleCurrentNode();
  
  console.log("Looping: ");
  new Array(5).fill(0).forEach(() => {
    linkedList.next();
    linkedList.consoleCurrentNode();
  });
  