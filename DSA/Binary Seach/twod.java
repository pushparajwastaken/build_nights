import java.util.Arrays;
public class twod {
    public static void main(String[]args){
int [][] arr={{1,2,3,4},{14,23,24,56},{21,32,34,56},{23,43,45,67}
    };
    System.out.println("Index of the target element is "+ Arrays.toString(bs(arr,34)));
}
static  int[] bs(int[][]arr,int target){
    int r=0;
    int c=arr.length-1;
    while(r<arr.length && c>=0){
        if(arr[r][c]==target){
            return new int[]{r,c};
        }else if(arr[r][c]>target){
            c--;
        }else{
            r++;
        }
    }
return new int[]{-1,-1};
}

}