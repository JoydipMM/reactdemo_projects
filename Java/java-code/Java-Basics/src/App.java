
// import PackageOne.One;
import PackageTwo.StageTwo;
import PackageTwo.Two;

public class App {
    public static void main(String[] args) {

        Child obj1 = new Child();

        // result:
        // this is Parent Constructor
        // This is child constructor


        // Two.twoMethod();
        // StageTwo.twoMethod();
        // // above two method called thair own class. They did not compare with
        // another. So they are not dynamic binding. they are run on compile time.

        // Calculation.sum(20, 40);
        // Calculation.sum2(20, 40);

        // AbstructChild absChildObj = new AbstructChild();
        // absChildObj.absmethod();

        // Calculation prntNameObj = new Calculation();
        // prntNameObj.printNames("dfdfdf", "dfgdfgd");
        // prntNameObj.printNames(); // argument may be blank also okey

        // Car carObj = new Car();
        // System.out.println(carObj); // This will create a object fron Car class.

        //Car carObj = new Car(); // error: The constructor Car() is not visible
        // System.out.println(carObj);

        //Car.getCarInstance();

        // int row = 5;
        // int number = 1;

        // for (int y = 1; y <= a; y++) {
        //     for (int x = 1; x <= y; x++) {
        //         System.out.print("*");
        //     }
        //     System.out.println("");
        // }

        // for (int y = 1; y <= row; y++) {
        //     for (int x = 1; x <= row - y; x++) {
        //         System.out.print(" ");
        //     }
        //     for (int x = 1; x <= y; x++) {
        //         System.out.print("*");
        //     }
        //     System.out.println("");
        // }

        // for (int y = 1; y <= row; y++) {
        //     for (int x = 1; x <= y; x++) {
        //         System.out.print(x+" ");
        //     }
        //     System.out.println("");
        // }

        // for (int y = 1; y <= row; y++) {
        //     for (int x = 1; x <=row-y+1; x++) {
        //         System.out.print(x+" ");
        //     }
        //     System.out.println("");
        // }

        // for (int y = 1; y <= row; y++) {
        //     for (int x = 1; x <= y; x++) {
        //         System.out.print(number+" ");
        //         number++;
        //     }
        //     System.out.println("");
        // }
    // int row = 5;
    // for (int y = 1; y <= row; y++) {
    //     for (int x = 1; x <= y; x++) {
    //         int sum = y+x;
    //         if(sum % 2 == 0){ // even
    //             System.out.print("1 ");
    //         }else{ // odd
    //             System.out.print("0 ");
    //         }
    //     }
    //     System.out.println("");
    // }

    // int row = 5;
    // for (int y = 1; y <= row; y++) {
    //     for (int x = 1; x <= row - y; x++) { 
    //        System.out.print("  ");
    //     }
    //     for (int x = 1; x <= row; x++) { 
    //         System.out.print("* ");
    //     }
    // System.out.println("");
    // }

    // int row = 5;

    // for (int y = 1; y <= row; y++) {
    //     for (int x = 1; x <= row - y; x++) { 
    //         System.out.print(" ");
    //     }
    //     for (int x = 1; x <= y; x++) { 
    //         System.out.print(y+" ");
    //     }
    // System.out.println("");
    // }


    // int row = 5;
    // for (int y = 1; y <= row; y++) {
    //     //spaces
    //     for (int x = 1; x <= row - y; x++) { 
    //         System.out.print(" ");
    //     }
    //     //first part
    //     for (int x = y; x >= 1; x--) { 
    //         System.out.print(x);
    //     }
    //     //second part
    //     for (int x = 2; x <= y; x++) { 
    //         System.out.print(x);
    //     }
    // System.out.println("");
    // }


    // int n = 5;
    //    for(int i=1; i<=n; i++) {
    //        //spaces
    //        for(int j=1; j<=n-i; j++) {
    //            System.out.print(" ");
    //        }


    //        //first part
    //        for(int j=i; j>=1; j--) {
    //            System.out.print(j);
    //        }


    //        //second part
    //        for(int j=2; j<=i; j++) {
    //            System.out.print(j);
    //        }
    //        System.out.println();
    //    }



        // int n = 5;

        // // upper half
        // for(int i=1; i<=n; i++){

        //     // first half
        //     for( int j=1; j<=i; j++ ){
        //         System.out.print("*");
        //     }

        //     // space
        //     int space = 2 * (n-i);
        //     for( int j=space; j>=1; j-- ){
        //         System.out.print(" ");
        //     }

        //     // last half
        //     for( int j=1; j<=i; j++ ){
        //         System.out.print("*");
        //     }

        // System.out.println();
        // }

        // // lower half
        // for(int i=n; i>=1; i--){

        //     // first half
        //     for( int j=1; j<=i; j++ ){
        //         System.out.print("*");
        //     }

        //     // space
        //     int space = 2 * (n-i);
        //     for( int j=space; j>=1; j-- ){
        //         System.out.print(" ");
        //     }

        //     // last half
        //     for( int j=1; j<=i; j++ ){
        //         System.out.print("*");
        //     }

        // System.out.println();
        // }

        // int n = 5;

        // for( int i=1; i <=n; i++ ){
        //     for(int j=1; j<=n-i; j++){
        //         System.out.print(" ");
        //     }
        //     for(int j=1; j<=i; j++){
        //         System.out.print(i+" ");
        //     }
        //     System.out.println();
        // }

        // int n = 5;

        // for( int i=1; i <=n; i++ ){
        //     for(int j=1; j<=n-i; j++){
        //         System.out.print(" ");
        //     }
        //     for(int j=i; j>=1; j--){
        //         System.out.print(j);
        //     }
        //     for(int j=2; j<=i; j++){
        //         System.out.print(j);
        //     }
        // System.out.println();
        // }

        // int n = 4;

        // for( int i=1; i <=n; i++ ){
        //     for(int j=1; j<=n-i; j++){
        //         System.out.print(" ");
        //     }
        //     for(int j=1; j<=(2*i)-1; j++){
        //         System.out.print("*");
        //     }
        //     System.out.println();
        // }
        // for( int i=n; i >=1; i-- ){
        //     for(int j=1; j<=n-i; j++){
        //         System.out.print(" ");
        //     }
        //     for(int j=1; j<=(2*i)-1; j++){
        //         System.out.print("*");
        //     }
        //     System.out.println();
        // }


        // for( int i=1; i <=n; i++ ){
        //     for(int j=1; j<=n-i; j++){
        //         System.out.print(" ");
        //     }
        //     for(int j=1; j<=i; j++){
        //         System.out.print("*");
        //     }
        //     for(int j=2; j<=i; j++){
        //         System.out.print("*");
        //     }
        //     System.out.println();
        // }

        // for( int i=n; i>=1; i-- ){
        //     for(int j=1; j<=n-i; j++){
        //         System.out.print(" ");
        //     }
        //     for(int j=1; j<=i; j++){
        //         System.out.print("*");
        //     }
        //     for(int j=2; j<=i; j++){
        //         System.out.print("*");
        //     }
        //     System.out.println();
        // }























    }

    public void MemoMange(){

    }




    
}
// result:
// Car Constructor called





public class Demo {
    public static void main(String[] args) {
        int a = 10;
        String stringlitaral = "String 01";
        Person p1 = new Person("Alice");
        Person p2 = new Person("Bob");
    }


    class Person {
        String name;
        String stringlitaral = "String 01";
        String stringlitaral_new = new String("String 01");
        Person(String name) {
            this.name = name;
        }
    }
}


