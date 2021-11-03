/* 
 * Author: 
 * 
 * Purpose: To demonstrate and practice how to move code from main to other modules. 
 * 
 * Note: You can stop the program from executing by clicking the 'Reset' button above. 
 *       Then you can view the output by clicking on the Console tab near the bottom of the screen. 
 */

public class Loops_Nbr_1_RefactorMain {
    
    final static int HOURS   = 24;   //final makes this a constant that cannot be changed
    final static int MINUTES = 60;   //static says this is a static variable and not an instance variable (in OOP)
    final static int SECONDS = 60;
    
    public static void main (String args [ ]) {
        
        //3. Move all the code of the for-minutes loop to the displayMinutes module. (including the for-minutes line).
        //   Leave the clockRings looping code in main. 
        //4. Call displayMinutes from inside the for-hours loop. Send the value of the variable hours as an argument.
        //5. Delete all the for-minutes loop code from main.
        
        for (int hours = 0; hours < HOURS; hours++){
            for (int minutes = 0; minutes < MINUTES; minutes++){
                System.out.print(hours + ":" + minutes + ":");
                for (int seconds = 0; seconds < SECONDS; seconds++){
                    if ((seconds >= 0 && seconds < 5) || (seconds > 55)){
                        System.out.print(seconds + " ");
                    }else{   
                        System.out.print(".");                        
                    }
                }
                System.out.println("");
            }
            
            //9. Copy the below clockRings loop code to the displayDingDongs module. Include the last println.
            //10.Then call displayDingDongs, passing it the hours as an argument.
            //11.Delete the code in main you just copied to displayDingDongs.
            for (int clockRings = 0; clockRings < hours + 1; clockRings++){
                System.out.println("");  //the \n means to start displaying on a new line
                System.out.print("Ding-Dong  ");
            }
            System.out.println("");
        }
        
    }//end of main
    
    //12. Delete all the comments from main. Look how simple main is now. 
    //    It does not contain any input or output lines anymore. It just has control code.
    
    //8. Create a module named displayClockRings. Accept the int variable named hours as a parameter. 
    
    
     //TO DO: 
    //1. Create a module named displayMinutes. Accept the int variable hours as an incoming parameter. 
    
    //5. Move all the code inside the for-seconds loop in main to the module named displaySeconds. 
    //6. Call displaySeconds from inside the for-minutes loop. Send hours and minutes as arguments. 
    //7. Delete the code in displayMinutes you just moved to displaySeconds 
    


   //2. Create a module named displaySeconds. Accept int variables named hours and minutes as parameters. 
    
    
    
    
    
}//end of class