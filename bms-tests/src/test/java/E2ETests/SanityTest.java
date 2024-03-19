package E2ETests;

import org.openqa.selenium.WebDriver;
import  org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;

public class SanityTest {
    WebDriver driver;

    @BeforeSuite
    void setup()
    {


    }

 @Test
    void LaunchApplication_AssertTitle()
    {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\91903\\Downloads\\chromedriver-win64\\chromedriver-win64\\chromedriver.exe");
      //This is due to some bug, we need to do thes. More details
//        https://stackoverflow.com/questions/75678572/java-io-ioexception-invalid-status-code-403-text-forbidden
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--remote-allow-origins=*");
        WebDriver driver = new ChromeDriver(options);

    driver.get("http://localhost:3000/");
        System.out.println(driver.getTitle());
driver.quit();
    }

}
