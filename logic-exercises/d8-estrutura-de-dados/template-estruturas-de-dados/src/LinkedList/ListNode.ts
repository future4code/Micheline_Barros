export class ListNode{
    constructor(
        public value: any,
        public next: ListNode | null = null
    ){}
}

export const node = new ListNode("1", new ListNode("2"))