/*
 *循环链表
 *节点的索引在添加、删除时发生改变
*/
function Node(element) {
    this.element=element;
    this.index=null;
    this.next=null;
}
// Node.prototype.constructor=Node;
function LList() {
    this.head=new Node("head");
    this.head.index=-1;
    this.head.next=this.head;    
    this.pointer=0;
    this.find=find;
    this.insert=insert;
    this.display=display;
    this.findPrevious=findPrevious;
    this.remove=remove;
    this.advance=advance;
    this.length=length;
    this.show=show;              //返回当前节点
}
function find(item) {
    var currNode=this.head;
    while(currNode!=item && currNode.next!=null && currNode.next.element!="head"){
        currNode=currNode.next;
    }
    return currNode;
}
function insert(newElement,item){
   var newNode=new Node(newElement);
   var currNode=this.find(item);
   newNode.index=currNode.index+1;
   newNode.next=currNode.next;
   currNode.next=newNode;
   this.pointer=newNode.index;
}
function remove(item) {
    var prevNode=this.findPrevious(item);
    if(!(prevNode.next==null)){
        prevNode.next=prevNode.next.next; 
        prevNode.next.index=(prevNode.next.index==-1) ? -1:prevNode.index+1;
        if(prevNode.next.index!=-1) {
            var currNode=prevNode.next;
            while(currNode.next !=null && currNode.next.element != "head") {
                currNode.next.index-=1;
                currNode=currNode.next;
            }
        }
        this.pointer=(prevNode.next.index==-1) ? prevNode.next.next.index:prevNode.next.index;            
    }
}
function findPrevious(item){
    var currNode=this.head;
    while(!(currNode.next==null) && (currNode.next.element!=item)){
        currNode=currNode.next;
    }
    return currNode;
}
function display(){
    var currNode=this.head;
    var nodeList={};
    while(!(currNode.next==null) && !(currNode.next.element=="head")){
        //console.log("剩下的值："+currNode.next.element+"/"+currNode.next.index);
        nodeList[currNode.next.index]=currNode.next.element;
        currNode=currNode.next;
    }
    return nodeList;
}


function advance(n) {
    if(Math.abs(n)===Infinity) {
        throw new Error("输入的数值是不可计算！");
        return;
    }
    var currPointer=this.pointer;
    if(+currPointer+n+1>this.length()) {
        this.pointer=(+currPointer+n)%this.length();
    }else {
        this.pointer=(+currPointer+n);
    }

}
function length(){
    var currNode=this.head,
        sum=0;
    while(currNode.next!=null && currNode.next.element!="head") {
        currNode=currNode.next;
        sum+=1;
    }
    return sum;
}
function show() {
    var currNode=this.head,
        currPointer=this.pointer;
    while(currNode.next!=null && currNode.next.element!="head") {          
        if(+currNode.next.index==+currPointer) {                      
            return currNode.next;
        } 
        currNode=currNode.next;   
    }
    return -1;
}