public class SelectionSort {
    public static void main(String[] args) {
        int[]arr={21,22,43,11,3,44,53,27,98,789,6543};
        SS(arr,arr.length-1,0,arr[0],0);
        for(int i=0;i<arr.length;i++){
            System.out.print(arr[i]+" ");
        }}
          public static void SS(int []arr, int pass,int index,int max,int maxIndex){
        if(pass==0)return;
       if(index<pass){
         if(arr[index]>max){
           max=arr[index];
           maxIndex=index;
        } 
        SS(arr,pass,index+1,max,maxIndex);
       }
        else{
            int temp=arr[pass-1];
            arr[pass-1]=max;
            arr[maxIndex]=temp;
            SS(arr,pass-1,0,arr[0],0);
        }
    }
}
