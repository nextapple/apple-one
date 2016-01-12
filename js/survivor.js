function survive(n,m) {
    var peopleList=new LList();
    if(n>2 && m>1 && n>=m) {
        for(var i=0;i<n;i++) {
            if(i===0) {
                peopleList.insert(i, "head");
            }else {
                peopleList.insert(i,i-1)
            }                
        }
        var n_opt=peopleList.length();
        
        //开始执行减人
        peopleList.pointer=0;
        (function(){
            while(n_opt>m-1) {  
                peopleList.display();                         
                peopleList.advance(m-1);                       
                                           
                var currNode=peopleList.show();
               // console.log("当前的值："+currNode.element+"/"+currNode.index); 
                if(+currNode==-1) { throw new Error("当前节点没有找到");}               
                peopleList.remove(currNode.element);
                n_opt--;
            } 
        })(); 
        return peopleList.display();                              
    }else {
        throw new Error("输入的条件有问题！");
        return;
    }
}

/*(function(){
    var scripts=document.getElementsByTagName("script");
    var curScript=scripts[scripts.length-1];
    if(curScript.executed) {
        return;
    }
    curScript.executed=true;
    var script=curScript.innerHTML;
    if(script) {
        window.onload=function() {
            eval(script);
        }
    }
})();*/