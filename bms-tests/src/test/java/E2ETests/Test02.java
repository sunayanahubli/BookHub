package E2ETests;

import org.testng.annotations.Test;

public class Test02 {

    @Test(priority = 1)
    void setup2()
    {
        System.out.println("setup");
//        Assert.fail();
    }

    @Test(priority = 2)
    void login2()
    {
        System.out.println("login");
    }

    @Test(priority = 3)
    void teardown2()
    {
        System.out.println("teardown");
    }
}
