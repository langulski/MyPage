/* 
 * Author: 
 */

import java.util.*;

public class Functions_Nbr_6_LibraryFunctions {
    static Scanner keyboard = new Scanner(System.in); 
 
    public static void main (String args [ ]) {
    
        //TO DO: 
        //1. Call the getString function below and send a message as an argument: "Enter some text"

        
        //2. Using the String library function length(), display the length of the string like this: 
        //     The length of 'Java is great!' is 14 characters
        //   Hint: sample usage: myString.length() 
        

        
        //3. Using the String library function toUpperCase(), display a line like this: 
        //     The string 'Java is great!' is 'JAVA IS GREAT!' in uppercase 
        
        
        
    }//end of main

    
    //Do not change this function!
    private static String getString (String message ){    
        System.out.println(message);                
        String newValue = keyboard.nextLine();    
        return newValue;
    }     
    
}//end of class