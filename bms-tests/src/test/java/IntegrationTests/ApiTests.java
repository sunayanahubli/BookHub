package IntegrationTests;

import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class ApiTests {

   private long createdBookId;
   private RequestSpecification requestSpecification;

   @BeforeClass
   public void setup() {
      RestAssured.baseURI = "http://localhost";
      RestAssured.port = 8080; //
      RestAssured.basePath = "/api/books";
      RestAssured.enableLoggingOfRequestAndResponseIfValidationFails(); // Enable logging at the class level

      // Create request specification, we can add headers, query parameters
      requestSpecification = new RequestSpecBuilder()
              .setContentType(ContentType.JSON)
              .build();
   }

   @Test(priority = 0)
   public void testCreateBook() {

      String requestPayload = "{\"title\": \"Harry Potter and the Goblet of Fire\", \"author\": \"J.K. Rowling\", \"isbn\": \"isbn_04645\"}";

      Response response = given()
              .spec(requestSpecification)
              .body(requestPayload)
              .when()
              .post()
              .then()
              .statusCode(201)
              .extract().response();

      // Extract the created book ID from the response
      createdBookId = response.jsonPath().getLong("id");

   }

   @Test(dependsOnMethods = "testCreateBook", priority = 1)
   public void testGetBookById() {
      Long bookId = createdBookId; // Change it to an existing book ID

      given()
              .when()
              .get("/{id}", bookId)
              .then()
              .statusCode(200)
              .body("id", equalTo(bookId.intValue())); // Assuming the response body contains the book's ID

      given()
              .when()
              .get("/{id}", bookId)
              .then()
              .statusCode(200)
              .body("title", containsString("Harry Potter"));
/// Assuming the response body contains the book's ID
   }

   @Test
   public void testGetAllBooks() {
      given()
              .when()
              .get()
              .then()
              .statusCode(200)
              .body("$", not(empty())); // Assuming the response body is a non-empty list
   }

   @Test(priority = 2)
   public void testUpdateBook() {
      Long bookId = 59L; // Change it to an existing book ID

      String requestPayload = "{\"id\": \"59\", \"title\": \"Harry Potter\", \"author\": \"J.K. Rowling\", \"isbn\": \"isbn_99\"}";


      // Set updatedBookDto properties as needed

      given()
              .contentType(ContentType.JSON)
              .body(requestPayload)
              .when()
              .put("/{id}", bookId)
              .then()
              .statusCode(200);
   }

   @Test(dependsOnMethods = "testCreateBook", priority = 3)
   public void testDeleteBook() {


      given()
              .when()
              .delete("/{id}", createdBookId)
              .then()
              .statusCode(200);
   }
}