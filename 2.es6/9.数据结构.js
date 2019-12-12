/**
 * 队列(数组)
 *      排队，先进先出
 * 栈
 *      先进后出
 * 链表：单项链表、双向链表、循环链表
 *     前一个node通过next指向后一个，没有固定排序，删除中间一个时只需要将前一个的next指向后一个的node即可 操作数据时不破坏数据原有结构
 * 集合
 * hash表
 * 树
 * 图
 */

//  队列
// class Queue {
//     constructor() {
//         this.queue = [];
//     }

//     enqueue(ele) {
//         this.queue.push(ele)
//     }
//     dequeue() {
//         this.queue.shift();
//     }
// }

// let queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.dequeue();
// console.log(queue.queue)

// 栈   先进后出，代码执行的时候结构就是栈
// class Stack {
//     constructor() {
//         this.stack = [];
//     }
//     put(element) {   // 往最后加入
//         this.stack.push(element);
//     }
//     pop() {  // 从最前取出
//         this.stack.pop();
//     }
// }

// 链表结构  单项、双向、循环
// class Node {
//     constructor(element) {
//         this.element = element;
//         this.next = null
//     }
// }

// class LinkList {
//     constructor() {
//         this.head = null;
//         this.length = 0;
//     }
//     append(element) {
//         let node = new Node(element);   // 创建一个新节点
//         if (!this.head) {   // 如果链表没有head，就把这个node作为head
//             this.head = node;
//         } else {    // 如果链表有head，就把找到链表中的最后一项，把他的next设置为新的node
//             let current = this.head;
//             while (current.next) {    // 往里层查看next的值，直至next值为null时，将新node赋值给此next
//                 current = current.next
//             }
//             current.next = node;
//         }
//         this.length++
//     }
//     insert(element, position) {
//         let node = new Node(element);
//         if (!this.head) {
//             this.head = node;
//         } else {
//             let index = 0;
//             let current = this.head;
//             let previous = null
//             while (index++ < position) {
//                 previous = current; // 上一个
//                 current = current.next;// 下一个
//             }
//             previous.next = node;
//             node.next = current;


//         }
//         this.length++;
//     }
// }

// let ll = new LinkList();
// ll.append(1);
// ll.append(2);
// ll.append(3);
// ll.insert(100, 0);
// console.log(JSON.stringify(ll))

// 集合 set 不能放重复的
// class Set {
//     constructor() {
//         this.set = {}
//     }
//     add(element) {
//         if (!this.set.hasOwnProperty(element)) {
//             this.set[element] = element;
//         }
//     }
// }
// let set = new Set();
// set.add(1);
// set.add(1);

// hash   map  取值快，扩展麻烦
// class Map {
//     constructor() {
//         this.arr = []
//     }
//     calc(key) {
//         let total = 0;
//         for (let i = 0; i < key.length; i++) {
//             total += key[i].charCodeAt();
//         }
//         return total % 100;
//     }
//     set(key, value) {
//         key = this.calc(key);
//         this.arr[key] = value;
//     }
//     get(key){
//         key = this.calc(key);
//         return this.arr[key];
//     }
// }
// let map = new Map();    // hash表
// map.set("abc", 123);    // 能根据key获取value，性能搞
// map.set("bbb", 234);
// map.get("abc");

// 二叉树  二叉查找树
class Node {
    constructor(element) {
        this.element = element;
        this.left = null;
        this.right = null;
    }
}
class Tree {
    constructor() {
        this.root = null;
    }
    insert(root, newNode) {
        if (newNode.element < root.element) {
            if (root.left == null) {
                root.left = newNode
            } else {
                this.insert(root.left, newNode)
            }
        } else {
            if (root.right == null) {
                root.right = newNode
            } else {
                this.insert(root.right, newNode);
            }
        }
    }
    add(element) {
        let node = new Node(element);
        if (!this.root) {
            this.root = node;
        } else {
            this.insert(this.root, node);   // 如果已有跟节点，那么试着将node往this.root(跟节点)上插入
        }
    }
}

let tree = new Tree();
tree.add(50)
tree.add(60)
tree.add(70)
tree.add(100)
tree.add(150)
tree.add(160)
tree.add(161)
console.log(JSON.stringify(tree));