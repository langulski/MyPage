/* 
 * Author: 
 * 
 * This program asks the user to enter 2 numbers, divides them, and displays the result. 
 */

import java.util.*;

public class Functions_Nbr_3_MultipleFunctions {
    static Scanner keyboard = new Scanner(System.in); 
    
    public static void main (String args [ ]) {
        int firstNbr;
        int secondNbr;
        double result;
    
        //TO DO: 
        //1. Call the function getInteger and pass it this message: "Enter the first number"
        //2. The function will return a value, save it in the variable firstNbr
        
        
        //3. Call the function getInteger and pass it this message: "Enter the second number"
        //4. The function will return a value, save it in the variable secondNbr
        
        
        //6. Call the function divideNumbers and pass it the two numbers entered by the user
        //7. The function will return a double number to the variable called result
        
        //10. Display the numbers entered by the user and the result like this: 
        //      18 / 12 is 1.5 
        
        
        //11. Is the result being displayed a double number? Does it show numbers to the right of the decimal?
        //    If not, you need to fix the function divideNumbers(...) to not use integer division 
        System.out.println("Are there numbers to the right of the decimal?");
        
    }//end of main

    //8. On the below line, add the parameters coming in from the calling statement 
    private static double divideNumbers ( ){    
        double result = 0;
        
        //9. Divide the first parameter by the second and save the result in the variable named 'result'
        
        
        
        
        
        return result;
    } 
    
    
    private static int getInteger (String message ){    
        //5. Display the parameter message
        
        
        
        int newValue = keyboard.nextInt();    
        return newValue;
    } 
    
}//end of class