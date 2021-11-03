/* 
 * Author: 
 * 
 * This program needs to be refactored. 
 * Create a generalized displayText module that is called twice. 
 * 
 */

public class Modules_Nbr_6_Generalized_Modules {
    
    public static void main (String args [ ]) {
        
        //TO DO: 
        //1. Instead of the three modules called below, call one module named displayText. 
        //   Pass it the string values to display. 
        
        displayHello();
        displayPurpose();
        displayGoodbye();
        
    }//end of main
    
    //2. Delete the below three modules
    private static void displayHello ( ){    
        System.out.println("Hello");
    } 
    private static void displayPurpose ( ){    
        System.out.println("This program should use one module to display the text.");
    } 
    private static void displayGoodbye ( ){    
        System.out.println("Goodbye");
    } 
    
    //3. Create a module called displayText that receives one String parameter. 
    //   The module should display the value of the String parameter. 
    
    
    
}//end of class