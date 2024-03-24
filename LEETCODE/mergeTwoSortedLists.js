// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

const mergeTwoSortedLists = (l1, l2) => {
  // initialize curr and dummy;
  let curr = new ListNode();
  let dummy = curr;

  // while loop - while li and l2 are not null
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2.val;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  // check if l1 and l2 are empty
  if (l1) {
    curr.next = l1;
  }
  if (l2) {
    curr.next = l2;
  }

  return dummy.next;
};

// Time Complexity: O(n + m)
// Space Complexity: O(1)

l1 = [1, 2, 4];
l2 = [1, 3, 4];
console.log(mergeTwoSortedLists(l1, l2)); // [1, 1, 2, 3, 4, 4]
