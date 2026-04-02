public class Pattern2 {
     public static void main (String[]args){
        print(5,0);
    }
    public static void print(int row,int column){
        if(row==0)return;
        
        
        if(row>column){
            print(row,column+1);
            System.out.print("*");
            
        }else{
            print(row-1,0);
              System.out.println();
        }
    }
}
