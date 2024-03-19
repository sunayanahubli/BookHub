package E2ETests;

//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;

import org.testng.annotations.Test;

public class Test01 {

    @Test()
    void setup()
    {
        System.out.println("setup");
    }

    @Test(dependsOnMethods = {"setup"})
    void login()
    {
//        WebDriver driver=new ChromeDriver();
//        driver.get("http://localhost:3000/");
        System.out.println("login");
//        Assert.fail();
    }

    @Test(dependsOnMethods = {"login"})
    void teardown()
    {
        System.out.println("teardown");
    }
}
