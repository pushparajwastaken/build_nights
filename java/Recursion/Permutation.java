import java.util.ArrayList;

public class Permutation {
    
    public static void main(String[] args) {

        findPermutation("","abc");
        ArrayList<String> ans= findPermutationRet("", "abc");
        System.out.println(ans);
        System.out.println(findPermutationCount("", "abc"));
    }
    static void findPermutation(String p, String up){
        if(up.isEmpty()){
       System.out.println(p);
        return ;
        }
        char ch=up.charAt(0);
        for(int i=0;i<=p.length();i++){
             String f=p.substring(0,i);// i exclusive whereas 0 is inclusive
             String s=p.substring(i,p.length());
            findPermutation(f+ch+s,up.substring(1));
        }
    }
    static ArrayList<String> findPermutationRet(String p, String up){
        if(up.isEmpty()){
       ArrayList <String> ans=new ArrayList<>();
       ans.add(p);
        return ans;
        }
        char ch=up.charAt(0);
        //local to this call
        ArrayList<String> ans=new ArrayList<>();
        for(int i=0;i<=p.length();i++){
             String f=p.substring(0,i);// i exclusive whereas 0 is inclusive
             String s=p.substring(i,p.length());
           ans.addAll( findPermutationRet(f+ch+s,up.substring(1)));
        }
        return ans;
    }
    static int findPermutationCount(String p, String up){
        if(up.isEmpty()){
        return 1;
        }
        int count=0;
        char ch=up.charAt(0);
        for(int i=0;i<=p.length();i++){
             String f=p.substring(0,i);// i exclusive whereas 0 is inclusive
             String s=p.substring(i,p.length());
            count=count+findPermutationCount(f+ch+s,up.substring(1));
        }
        return count;
    }
}