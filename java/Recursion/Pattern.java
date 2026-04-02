class Pattern{
    public static void main (String[]args){
        print(5,0);
    }
    public static void print(int row,int column){
        if(row==0)return;
        if(column==row || column>row){
            System.out.println();
            print(row-1,0);
            return;
        }
        System.out.print("*");
        print(row,column+1);
    }
}