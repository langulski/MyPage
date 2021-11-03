/* 
 * Author: 
 */

//This line is used to allow us to use the Scanner classes to get input from the user   
import java.util.*;

public class Basics_Nbr_3_UserInput {
    
    //The below line creates a Scanner object to read keyboard input.
    //By being below the class line and above main, this object is Global. 
    //You should not put any code above main unless told to do so. 
    static Scanner keyboard = new Scanner(System.in);
    
    public static void main (String args [ ]) {
        
        System.out.println("Please enter your name");
        String newString = keyboard.nextLine();  //this line gets a string from the keyboard and stores it in the variable newString
                
        System.out.println("Please enter your favorite integer");
        int newInt = keyboard.nextInt();         //this line gets an integer from the keyboard and stores it in the variable newInt
    
        //TO DO: 
        //1. Double the favorite number and store the result in an int variable named favoriteTimesTwo. 
        //2. Display output like the below to the console. Display the name entered and the variable favoriteTimesTwo.
        //   Bob, your favorite number times two is 44 
        
        
        
        

    
    }//end of main
}//end of class