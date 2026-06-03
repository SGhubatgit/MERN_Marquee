import java.util.Scanner;

public class StudentGrade {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Read three grades
        char grade1 = scanner.nextLine().toUpperCase().charAt(0);
        char grade2 = scanner.nextLine().toUpperCase().charAt(0);
        char grade3 = scanner.nextLine().toUpperCase().charAt(0);
        
        // Output the grades separated by hyphens
        System.out.printf("%c-%c-%c%n", grade1, grade2, grade3);
        
        scanner.close();
    }
}