/* 
 * Author: 
 */

public class Functions_Nbr_4_RandomNbrFunction {
    
    public static void main (String args [ ]) {
        final int LOW = 10;
        final int HIGH = 100;
        int result;
    
        //TO DO: 
        //1. Call the function getRandomNbr and pass it the LOW and HIGH values as arguments
        //2. The function will return a value, save it in the variable result
        
        
        
        //3. Display the random number like this: 
        //       Hello! 
        //       The random number is 46 
        //   Use only one System.out.println statement! (Hint: use the \n newline escape character)
        
        
     
        
    }//end of main

    //Generates a random int number from low to high, inclusive
    public static int getRandomNbr (int low, int high) {
        return (int)(Math.random() * ((high + 1) - low)) + low;
    }
    
}//end of class