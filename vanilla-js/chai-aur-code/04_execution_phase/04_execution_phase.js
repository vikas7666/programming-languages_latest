/* 

    let val1  = 10;
    let val2  = 10;

    function addTwo(num1,num2){
        let total = num1 + num2;
        return total;
    }

    let result1 =  addTwo(val1, val2);
     let result2 = addTwo(5, 4);

    step 1
    Excecution Phase 
     ==>this 

     step 2 
     Memory Phase  ( we hold all the variable and stored at this place ) 
        val1 => undefined   (stored as undefined)
        val2 ==> undefined
        add ==> defination
        result1 ==> undefined
        result2 ==> undefined

    step3 
    excecution phase
     val1 => 10
     val2 ==> 10
     add num  ==> will create its own new execution context
*/


