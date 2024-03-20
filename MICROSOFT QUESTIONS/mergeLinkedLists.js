class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const mergeTwoLists = (l1, l2) => {
  // Create a dummy head node for the result list
  const dummyHead = new ListNode(0);
  let currentNode = dummyHead;

  // Loop through both lists simultaneously until one of them reaches the end
  while (l1 !== null && l2 !== null) {
    // Compare the values of the current nodes and append the smaller one to the result list
    if (l1.val < l2.val) {
      currentNode.next = l1;
      l1 = l1.next;
    } else {
      currentNode.next = l2;
      l2 = l2.next;
    }

    currentNode = currentNode.next;
  }

  // Attach the remaining nodes of the non-empty list to the result list
  if (l1 !== null) {
    currentNode.next = l1;
  } else {
    currentNode.next = l2;
  }

  // Return the head of the result list (ignoring the dummy head)
  return dummyHead.next;
};

const l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

const l2 = new ListNode(3);
l2.next = new ListNode(5);
l2.next.next = new ListNode(6);

const result = mergeTwoLists(l1, l2);
// console.log(result); // Should output: { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: { val: 6, next: null } } } } } }

const listToString = (head) => {
  let result = "";
  let currentNode = head;
  while (currentNode !== null) {
    result += `${currentNode.val} -> `;
    currentNode = currentNode.next;
  }
  result += "null";
  return result;
};

console.log(listToString(result)); // Should output: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
