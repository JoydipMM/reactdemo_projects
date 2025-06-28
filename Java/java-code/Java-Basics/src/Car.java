// We created this Cat class. Inside this class we have one variable and one method
public class Car {
    int id;
    Car() {
        id = 10;
        System.out.println("Car Constructor called"); // normal behaviour of Constructor
    } 

    public static Car getCarInstance(){
        return new Car();
    }
}
