// You are given two linked lists: list1 and list2 of sizes n and m respectively.

// Remove list1's nodes from the ath node to the bth node, and put list2 in their place.

// The blue edges and nodes in the following figure indicate the result:

const mergeInBetween = (list1, a, b, list2) => {
    let curr = new ListNode()

    while(list1 && list2) {
        // get index of a and b in list1 and remove them
        if(list1.val === a) {
            curr.next = list2
            list2 = list2.next
        } else {
            curr.next = list1
            list1 = list1.next
        }
    }
}