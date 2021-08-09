import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.stream.IntStream;


public class Main {
    public static void main(String[] args) throws NumberFormatException, IOException {
        
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        int[] arr = new int[N];

        for(int i=0; i<N; i++){
            arr[i] = Integer.parseInt(br.readLine());
        }

        Arrays.sort(arr);
        float size = arr.length;
        int avg = Math.round(IntStream.of(arr).sum() / size);
        int min = arr[0];
        int max = arr[(int)size-1];

        System.out.println(avg);
        System.out.println(arr[(int)size / 2]);

        System.out.println(max - min);
    }
}
