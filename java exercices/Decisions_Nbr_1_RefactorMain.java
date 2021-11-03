/* 
 * Author: 
 */

import java.util.*;

public class Decisions_Nbr_1_RefactorMain {
    static Scanner keyboard = new Scanner(System.in); 
    
    public static void main (String args [ ]) {
        
        boolean playerWonTheGame = getYesOrNo("Did you win? (y/n)");
        
        if (playerWonTheGame) {
            System.out.println("Congratulations!");
            System.out.println("You are the winner!");
            System.out.println("Humans rule!");
        }else{
            System.out.println("You lost?");
            System.out.println("All of humanity mourns your defeat.");
            System.out.println("We must now welcome our computer overlords.");
        }
        
        //5. Inside the if-statement, call displayWinner when the player has won. 
        //   Call displayLoser when the player lost. 
        
        //6. How may lines of code are in main (including brackets)? 
        //   When you are finished, there should be 6 lines of code in main instead of 10. 
        //   Notice that main does not contain any output lines anymore. It just has control code.
        
        
    }//end of main
    
    //TO DO: 
    //1. Create a module named displayWinner. No parameters.
    //2. Display the 3 lines from main that are displayed with the player wins. 
    
    //3. Create a module named displayLoser. No parameters.
    //4. Display the 3 lines from main that are displayed with the player loses. 
    
    
    
    
    
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