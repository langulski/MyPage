/* 
 * Author: 
 */

public class Functions_Nbr_5_DoubleRandomNbr {
    
    public static void main (String args [ ]) {
    
        //TO DO: 
        //1. Using the getRandomNbr function below, get and display a random number between 1000.00 and 9999.99
        //   Yes, the result will be a double number with 2 and ONLY 2 numbers to the right of the decimal
        //2. Display the random number like this: 
        //       The random number is 1234.56 
        //Hint: This is math, not programming. Software developers need to be able to do basic math and write code! 
        
        
        
     
        
    }//end of main

    //Generates a random int number from low to high, inclusive
    //DO NOT CHANGE THIS FUNCTION!!!  I MEAN IT!!!
    public static int getRandomNbr (int low, int high) {
        return (int)(Math.random() * ((high + 1) - low)) + low;
    }
    
}//end of class