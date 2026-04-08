import java.util.ArrayList;
import java.util.List;

public class Strings {
     static List<String> set = new ArrayList<>();
    public static void main(String[] args) {
        String s = "fstfd";

        String filtered = sol(s, 0, "");
        System.out.println(filtered);

        subsets(s, "", 0);
    }

    public static String sol(String s, int index, String res) {
        if (index == s.length()) {
            return res;
        }

        if (s.charAt(index) != 'a') {
            res = res + s.charAt(index);
        }

        return sol(s, index + 1, res);
    }

    public static void subsets(String s, String res, int index) {
        if (index == s.length()) {
            System.out.println(res);
set.add(res);
            return;
        }

        // include
        subsets(s, res + s.charAt(index), index + 1);

        // exclude
        subsets(s, res, index + 1);
    }
    
}