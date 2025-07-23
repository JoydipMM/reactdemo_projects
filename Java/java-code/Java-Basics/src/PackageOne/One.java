package PackageOne;
import PackageTwo.Two;

public class One extends Two { // by using the "extends" keyword we make this class child of "Two" class from PackageTwo
    public void oneMethod() {
        System.out.println("oneMethod Static method");

        //Two twoMethodObj = new Two();
        //twoMethodObj.twoMethod(); // error: The method twoMethod() from the type Two is not visibleJava(67108965)

        //twoMethod() // error: The method twoMethod() from the type Two is not visibleJava(67108965)
        
    }
}

