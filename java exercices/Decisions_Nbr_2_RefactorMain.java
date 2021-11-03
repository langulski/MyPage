/* 
 * Author: 
 */

import java.util.*;

public class Decisions_Nbr_2_RefactorMain {
    static Scanner keyboard = new Scanner(System.in); 
    
    public static void main (String args [ ]) {
        
        //TO DO: 
        //5. Call the generalized function getResult twice with the appropriate argument values
        //   as shown below. 
        //   Return a boolean to these boolean variables: humanWonFirstGame and humanWonSecondGame. 
        //6. Delete Code Block One and Code Block Two.
        
 //Code Block One --------------------------------------------------------------------
        boolean humanWonFirstGame  = getYesOrNo("Did you win the first game? (y/n)");
        if (humanWonFirstGame) {
            System.out.println("Congratulations!");
        }else{
            System.out.println("Better luck next time.");
        }
//End of Code Block One --------------------------------------------------------------
        
        
//Code Block Two ---------------------------------------------------------------------
        boolean humanWonSecondGame = getYesOrNo("Did you win the second game? (y/n)");
        if (humanWonSecondGame) {
            System.out.println("Congratulations!");
        }else{
            System.out.println("Better luck next time.");
        }
//End of Code Block Two --------------------------------------------------------------
        
        
        //7. Call the module named displayResult. 
        //   Pass it the two boolean values from above. 
        //   Move all the below code into the module displayResult.
        //8. Delete the below code. 
        
        if (humanWonFirstGame) {
            if (humanWonSecondGame) {
                System.out.println("Congratulations!");
                System.out.println("Humans rule!");
            }else{
                System.out.println("At least you didn't lose.");
                System.out.println("A tie isn't too shabby.");
            }   
        }else{
             if (humanWonSecondGame) {
                 System.out.println("Not losing is OK for now.");
                 System.out.println("Try harder next time.");
             }else{
                 System.out.println("You were crushed!");
                 System.out.println("Did you even try to win?");
             }   
        }
        
    }//end of main
    
    //9. Delete all the comments from main. 
    //   Look how simple main is now. 
    //   It does not contain any input or output lines anymore. It just has control code.
    
    
    
    //TO DO: 
    //1. Create a function named getResult that accepts a String as a parameter and returns a boolean value.
    //2. Move the code from code block one in main to this function.
    //3. Generalize the code. 
    
    
    
    //4. Create a module named displayResult. Two booleans will be the incoming parameters.
    
    
    
    
    
//---------------------------------------------------------------------------------    
    
    //Do not change the below generalized functions!
    public static String getString(String msg) {
        String answer = "";
        System.out.println(msg);
        try {
            answer = keyboard.nextLine(); 
        }
        catch (Exception e) {
            System.err.println("Error reading input from user. Ending program.");
            System.exit(-1);
        } 
        
        while (answer.replace(" ", "").equals("")) {
            System.err.println("Error: Missing input.");
            try {
                System.out.println(msg);
                answer = keyboard.nextLine(); 
            }
            catch (Exception e) {
                System.err.println("Error reading input from user. Ending program.");
                System.exit(-1);
            } 
        }
        return answer;            
    }
    
    public static boolean getYesOrNo(String msg) {
        String answer = getString(msg);
        
        while (answer.compareToIgnoreCase("y")   != 0 
                   && answer.compareToIgnoreCase("yes") != 0 
                   && answer.compareToIgnoreCase("n")   != 0 
                   && answer.compareToIgnoreCase("no")  != 0) {
            
            if (answer.replace(" ", "").equals("")) {
                System.err.println("Error: Missing y/n input.");
            } else {
                if (answer.compareToIgnoreCase("y")   != 0 
                        && answer.compareToIgnoreCase("yes") != 0 
                        && answer.compareToIgnoreCase("n")   != 0 
                        && answer.compareToIgnoreCase("no")  != 0) {
                    System.err.println("Error: Unexpected input.");
                }
            }
            answer = getString(msg);
        } 
        
        if  (answer.compareToIgnoreCase("y")   == 0  
                 || answer.compareToIgnoreCase("yes") == 0) {
            return true;
        } 
        else {
            return false;
        }
    }
    
}//end of class