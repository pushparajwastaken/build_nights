public class Performance {
    public static void main(String[] args) {
        String series="";
        for(int i=0;i<26;i++){
            char ch=(char)('a'+i);
            System.out.println(ch);

            series+=ch;//this creates a new object everytime by adding to series
        }
        System.out.println(series);
    }
    
}
