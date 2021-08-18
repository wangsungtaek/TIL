import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        final int KG_5 = 5;
        final int KG_3 = 3;

        int result = 0;

        while(true) {

            if( (N % KG_5) == 0 ) {
                result += N / KG_5;
                break;
            }

            else {
                N -= KG_3;
                result++;
            }

            if( N < 0 ) {
                result = -1;
                break;
            }

        }

        System.out.println(result);
        
    }
}
