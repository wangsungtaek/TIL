import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;


public class Main {
    public static void main(String[] args) throws IOException {
        
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int testCase = Integer.parseInt(st.nextToken());

        int height = 6;
        int width = 12;
        int person = 18;

        int ho = 0;
        
        for(int i = 0; i < testCase; i++) {
            StringTokenizer test = new StringTokenizer(br.readLine(), " ");

            height = Integer.parseInt(test.nextToken());
            width = Integer.parseInt(test.nextToken());
            person = Integer.parseInt(test.nextToken());

            if((person % height) == 0) {
                ho = ( height * 100 ) + ( person / height );
            } else {
                ho = ( person % height * 100 ) + ( person / height ) + 1;
            }

            System.out.println(ho);
        }
    }
}
