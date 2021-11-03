import java.util.TimeZone;
import java.util.Scanner;


class Main {
    public static void main(String[] args) {
        Scanner myObj = new Scanner(System.in);  // Create a Scanner object
        System.out.println("Enter username");
        
        String userName = myObj.nextLine();  // Read user input
        System.out.println("Username is: " + userName);  // Output user input
    }
}
public void calculateTotalMinutes()
{
    long durationMilliSeconds = endTimeMilliseconds - startTime; // total time the card was parked in the slot
    durationParked = convertTimeFormat(durationMilliSeconds);
    String [] time = durationParked.split(":");
    int hours = Integer.parseInt(time[0]);
    int minutes = Integer.parseInt(time[1]);
    int seconds = Integer.parseInt(time[2]);
    timeInMinutes = (hours * 60) + minutes + (seconds / 60);
}