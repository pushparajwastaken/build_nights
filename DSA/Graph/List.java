
import java.util.ArrayList;

public class List {
    public static void main(String[] args) {
        ArrayList<ArrayList<Integer>> list=new ArrayList<>();
        int n=3;
        for(int i=0;i<n+1;i++){
            list.add(new ArrayList<>());
        }
        System.out.println(list);

        list.get(1).add(2);
        list.get(2).add(1);

        list.get(1).add(3);
        list.get(3).add(1);

        list.get(2).add(3);
        list.get(3).add(2);

        for(int i=0;i<list.size();i++){
            for(int j=0;j<list.get(i).size();j++){
                System.out.print(list.get(i).get(j)+", ");
            }System.out.println();
        }
    }
    
}
