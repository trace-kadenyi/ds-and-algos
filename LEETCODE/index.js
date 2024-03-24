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
    // initialize
    let curr = new ListNode();
    let dummy = curr;

    // wihile loop
    while(l1 && l2){
        if(l1.val < l2.val) {
            curr.next = li.val;
            l1 = l1.next
        } else {
            curr.next = l2.val
            l2 = l2.next
        }
        curr = curr.next
    }

    if(l1) {
        curr.next = l1
    } if(l2) {
        curr.next = l2
    }
    return dummy.next
} 



l1 = [1, 2, 4];
l2 = [1, 3, 4];
console.log(mergeTwoSortedLists(l1, l2)); // [1, 1, 2, 3, 4, 4]
