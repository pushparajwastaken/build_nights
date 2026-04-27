import java.util.*;
public class selec {
    public static void main(String[] args) {
        int []arr={12,32,1,44,23,56,74,54,67};
        select(arr);
        System.out.println(Arrays.toString(arr));
    }
    static void select(int[]arr){
        for(int i=0;i<arr.length;i++){
            int last=arr.length-1-i;
            int maxIndex=getMaxIndex(arr,0,last);
            swap(arr,last,maxIndex);
        }
    }
    static int getMaxIndex(int[]arr,int start,int end){
        int maxIndex=start;
        for(int i=start;i<=end;i++){
            if(arr[i]>arr[maxIndex]){
                maxIndex=i;
            }
        }
        return maxIndex;
    }
    static void swap(int[]arr,int first,int second){
        int temp=arr[first];
        arr[first]=arr[second];
        arr[second]=temp;

    }
}
