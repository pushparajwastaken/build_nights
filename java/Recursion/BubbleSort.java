public class BubbleSort {
    public static void main(String[] args) {
        int[]arr={21,22,43,11,3,44,53,27,98,789,6543};
        BS(arr,arr.length-1,0);
        for(int i=0;i<arr.length;i++){
            System.out.print(arr[i]+" ");
        }
    }
    public static void BS(int []arr, int pass,int index){
        if(pass==0)return;
       if(index<pass){
         if(arr[index]>arr[index+1]){
            int temp=arr[index];
            arr[index]=arr[index+1];
            arr[index+1]=temp;
           
        } 
        BS(arr,pass,index+1);
       }
        else{
            BS(arr,pass-1,0);
        }
    }
}
