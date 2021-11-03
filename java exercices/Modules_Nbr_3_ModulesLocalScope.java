/* 
 * Author: 
 */

import java.util.*;

public class Modules_Nbr_3_ModulesLocalScope {
    static Scanner keyboard = new Scanner(System.in);
    
    public static void main (String args [ ]) {
        
        System.out.println("Please enter a number.");
        int aNbr = keyboard.nextInt();    //for the below examples, assume the user enters 23
        
        //TO DO: 
        //1. Call the module displayNumber and pass the value of aNbr to it as an argument 
        
        
        //2. Display the value of aNbr like this: 
        //     In main, the value of aNbr is still 23
        
        
        
        System.out.println("How and why did the value of aNbr change or not change?"); 
    }//end of main
    
    private static void displayNumber (int aNbr){
        //3. Display the contents of the variable 'aNbr' like this: 
        //     In displayNumber, aNbr is 23
        
        
        //4. Add 11 to aNbr
        
        
        //5. Display the contents of the variable 'aNbr' like this: 
        //     In displayNumber, after adding 11 to it, the value of aNbr is now 34 
        
        
    } 
    
}//end of class