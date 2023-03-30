import java.util.*;

class Main {
  public static Scanner scn = new Scanner(System.in);

  public static class ListNode {
    int val = 0;
    ListNode next = null;

    ListNode(int val) {
      this.val = val;
    }
  }

    public static ListNode reverse(ListNode head){
         ListNode pre=null;
         while(head!=null){
             ListNode n=head.next;
             head.next=pre;
             pre=head;
             head=n;
         }
         
        return pre;
     }
     public static boolean l1largerl2(ListNode l1, ListNode l2){
         int one=0;
         int two=0;
         while(l1!=null && l2!=null){
         one=one*10+l1.val;
         two=two*10+l2.val;
             l1=l1.next;
             l2=l2.next;
         }
         if(l1==null && l2==null){
             if(one>two){
                 return true;
             }else{
                 return false;
             }
         }else if(l1==null){
             return false;
         }else{
             return true;
         }
         
     }
  public static ListNode subtractTwoNumbers(ListNode l1, ListNode l2) {
      if(l1largerl2(l1,l2)){
      l1=reverse(l1);
      l2=reverse(l2);
          
      }else{
        l1=reverse(l2);
      l2=reverse(l1); 
      }
      ListNode ans=new ListNode(-1);
      ListNode move=ans;
      int carry=0;
      while(l1!=null){
          int n=carry;
          if(l1!=null){
             n+=l1.val;
              l1=l1.next;
          }
          if(l2!=null){
              n-=l2.val;
          l2=l2.next;
          }
          if(n<0){
              n+=10;
              carry=-1;
          }else{
              carry=0;
          }
          move.next=new ListNode(n);
          move=move.next;
         
      }
      
    ans=reverse(ans.next);
    while(ans!=null && ans.val==0){
        ans=ans.next;
    }
    return ans;
  }

  // InFput_code===================================================

  public static void printList(ListNode node) {
    while (node != null) {
      System.out.print(node.val + " ");
      node = node.next;
    }
  }

  public static ListNode makeList(int n) {
    ListNode dummy = new ListNode(-1);
    ListNode prev = dummy;
    while (n-- > 0) {
      prev.next = new ListNode(scn.nextInt());
      prev = prev.next;
    }

    return dummy.next;
  }

  public static void main(String[] args) {
    ListNode head1 = makeList(scn.nextInt());
    ListNode head2 = makeList(scn.nextInt());

    ListNode ans = subtractTwoNumbers(head1, head2);
    printList(ans);
  }

}