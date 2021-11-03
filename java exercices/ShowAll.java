/* 
 * Author: David A. Freitag
 *
The output of all the programs should look like the below.


  
********** Nbr 1 Hello World ********** 
Hello World! 

********** Nbr 2 Add Numbers ********** 
The total is: 57 

********** Nbr 3 User Input ********** 
Please enter your name 
Bob
Please enter your favorite integer 
22
Bob, your favorite number times two is 44 

********** Nbr 4 User Input Average ********** 
Please enter the first integer 
12
Please enter the second integer 
17
Please enter the third integer 
13
The average of 12, 17, and 13 is 14.0 

********** Nbr 5 Batting Average ********** 
Enter the player's number of hits. 
100
Enter the player's number of times at bat. 
350
The player's batting average is 0.2857142857142857 

********** Nbr 6 Miles per Gallon ********** 
How many Miles did you drive? 
233
How many gallons of gas did you use? 
2.3
Your car received 101.30434782608697 miles per gallon 

********** Nbr 1 Modules ********** 
Hello World! 

********** Nbr 2 Modules Age ********** 
How old are you? 
26
Your age is 26 
Your age doubled is 52 

********** Nbr 3 Modules Local Scope ********** 
Please enter a number. 
45
In displayNumber, aNbr is 45 
In displayNumber, after adding 11 to it, the value of aNbr is now 56 
In main, the value of aNbr is still 45 
How and why did the value of aNbr change or not change? 

********** Nbr 4 Modules Global Constant ********** 
What is your name? 
Bob
Hello, Bob. Pleased to meet you. 

********** Nbr 5 Modules Kilometer Converter ********** 
Please enter a number of Kilometers. 
123
123.0 miles is 76.4322 kilometers 
Is the answer correct? 

********** Nbr 6 Functions ********** 
What is your name? 
Bob
Your name is Bob 

********** Nbr 1 Functions Int ********** 
11 times 20.99 is 230.89 

********** Nbr 2 Multiple Functions ********** 
Enter the first number 
13
Enter the second number 
15
13 / 15 is 0.8666666666666667 
Are there numbers to the right of the decimal? 

********** Nbr 3 Random Nbr Function ********** 
Hello!
The random number is 66 

********** Nbr 4 Double Random Number ********** 
The random number is 9752.77 

********** Nbr 5 String Library Functions ********** 
Enter some text 
Java is Great!
The length of 'Java is Great!' is 14 
The string 'Java is Great!' is JAVA IS GREAT! in uppercase 

********** Nbr 6 String Library Functions ********** 
Enter some text 
Test
The length of 'Test' is 4 
The string 'Test' is TEST in uppercase

*/
public class ShowAll {  
    
    public static void main (String args [ ]) {   
        System.out.println("\n***** Basics Nbr 1 Hello World ");
        Basics_Nbr_1_HelloWorld.main(null);
        
        System.out.println("\n***** Basics Nbr 2 Add Numbers");
        Basics_Nbr_2_AddNumbers.main(null);
        
        System.out.println("\n***** Basics Nbr 3 User Input");        
        Basics_Nbr_3_UserInput.main(null);
        
        System.out.println("\n***** Basics Nbr 4 User Input Average");        
        Basics_Nbr_4_UserInputAverage.main(null);
        
        System.out.println("\n***** Basics Nbr 5 Batting Average");        
        Basics_Nbr_5_BattingAverage.main(null);
        
        System.out.println("\n***** Basics br 6 Miles per Gallon");        
        Basics_Nbr_6_MilesPerGallon.main(null);
        
        System.out.println("\n***** Modules Nbr 1 Modules");        
        Modules_Nbr_1_Modules.main(null);
        
        System.out.println("\n***** Modules Nbr 2 Modules Age");        
        Modules_Nbr_2_ModulesAge.main(null);
        
        System.out.println("\n***** Modules Nbr 3 Modules Local Scope");        
        Modules_Nbr_3_ModulesLocalScope.main(null);
        
        System.out.println("\n***** Modules Nbr 4 Modules Global Constant");        
        Modules_Nbr_4_ModulesGlobalConstant.main(null);
        
        System.out.println("\n***** Modules Nbr 5 Modules Kilometer Converter");        
        Modules_Nbr_5_ModulesKilometerConverter.main(null);
        
        System.out.println("\n***** Functions Nbr 1 Functions"); 
        Functions_Nbr_1_Functions.main(null);
        
        System.out.println("\n***** Functions Nbr 2 Functions Int"); 
        Functions_Nbr_2_FunctionsInt.main(null);
        
        System.out.println("\n***** Functions Nbr 3 Multiple Functions"); 
        Functions_Nbr_3_MultipleFunctions.main(null);
        
        System.out.println("\n***** Functions Nbr 4 Random Nbr Function"); 
        Functions_Nbr_4_RandomNbrFunction.main(null);
        
        System.out.println("\n***** Functions Nbr 5 Double Random Number"); 
        Functions_Nbr_5_DoubleRandomNbr.main(null);
        
        System.out.println("\n***** Functions Nbr 6 String Library Functions"); 
        Functions_Nbr_6_LibraryFunctions.main(null);

        System.out.println("\n***** Decisions Nbr 1 Refactor Main"); 
        Decisions_Nbr_1_RefactorMain.main(null);

        System.out.println("\n***** Loops Nbr 1 Refactor Main"); 
        Loops_Nbr_1_RefactorMain.main(null);

        
    }//end of main 
}//end of class