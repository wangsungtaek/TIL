import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        /*
         * testCase : 테스트 횟수
         * k : 아파트 층수
         * h : 아파트 호수
         * sum : 사람 수
         */

        int testCase = Integer.parseInt(br.readLine());
        int k = 0;
        int h = 0;
        int sum = 0;
        
        for(int l = 0; l < testCase; l++ ) {
            k = Integer.parseInt(br.readLine());
            h = Integer.parseInt(br.readLine());

            int[][] arr = new int[k][h];

            for(int i = 0; i < arr.length; i++ ) {
                
                sum = 0;
                for(int j = 0; j < arr[i].length; j++ ) {
                    
                    if(i==0) {
                        sum += (j + 1);
                        arr[i][j] = sum;
                    }
                    else {
                        sum += arr[i-1][j];
                        arr[i][j] = sum;
                    }
                }
            }
            System.out.println(sum);
        }   
    }
}
