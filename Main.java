import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws NumberFormatException, IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        StringBuffer bf = new StringBuffer();

        char result = st.nextToken().charAt(0);

        switch(result) {
            
            case 'A':
                bf.append("best!!!");
                break;
            case 'B':
                bf.append("good!!");
                break;
            case 'C':
                bf.append("run!");
                break;
            case 'D':
                bf.append("slowly~");
                break;
            default:
                bf.append("what?");    
        }

        System.out.printf( "%s", bf.toString() );
    }
}
