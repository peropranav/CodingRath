
import java.util.Scanner;

public class runner {
	
	static Scanner s = new Scanner(System.in);
	
	public static void main(String[] args) {
		int n = s.nextInt();
		int m = s.nextInt();
		char arr[][] = new char[n][m];
		for(int i=0;i<n;i++){
			String str = s.next();
			for(int j=0;j<m;j++)
				arr[i][j] = str.charAt(j);
		}
		String str = s.next();
		char[] letters = new char[str.length()];
		for(int i=0;i<str.length();i++)
			letters[i] = str.charAt(i);
		solution.LongestLetterChain(arr, letters);
	}
	
}
