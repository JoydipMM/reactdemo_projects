public class Calculation extends Car {

    static int carPrice = 20;

    public static int sum( int a, int b){
        int total = a+b;
        System.out.println(total);
        return total;
    }
    // above sum method can be static because the sum method depends on the arguments only and it can not change any state of any instance or object

    public static int sum2( int a, int b){
        int total = a+b;
        carPrice = carPrice + total;
        System.out.println(carPrice);
        return carPrice;
    }
    // above sum2 method can not be static because the sum2 method not depends on the arguments only it also change the state of instance variable

    public void printNames(String... names) {
        for (String name : names) {
            System.out.println(name);
        }
    }

}
