import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.stream.IntStream;


public class Main {
    public static void main(String[] args) throws NumberFormatException, IOException {
        
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        /*
         * N : 입력 갯수
         * min : arr 입력 값 저장
         * count : 입력된 수 카운팅
         */

        int N = Integer.parseInt(br.readLine());
        int[] arr = new int[N];
        int[] count = new int[8001];
        
        // 입력 logic
        for( int i = 0; i < N; i++ ) {
            int value = Integer.parseInt(br.readLine());
            arr[i] = value;
            count[value + 4000]++;
        }

        Arrays.sort(arr);
        
        /*
         * size : arr배열의 사이즈
         * min : 최소 값
         * max : 최대 값
         * avg : 평균값
         * mode : 최빈값
         * mode_max : 최빈값 중 최대 값
         * flag : 동일한 최빈값 등장했을때 true
         */

        float size = arr.length;
        int min = arr[0];
        int max = arr[(int)size-1];
        int avg = Math.round(IntStream.of(arr).sum() / size);
        int mode = Integer.MAX_VALUE;
        int mode_max = 0;
        boolean flag = false;
        
        // 최빈값 찾기
        for( int i = min + 4000; i <= max + 4000; i++ ) {

            if( mode_max < count[i] ) {
                mode_max = count[i];
                mode = i - 4000;
                flag = true;
            }

            else if ( mode_max == count[i] && flag == true ) {
                mode = i - 4000;
                flag = false;
            }
        }

        // 출력
        System.out.println(avg);
        System.out.println(arr[(int)size / 2]);
        System.out.println(mode);
        System.out.println(max - min);
    }
}