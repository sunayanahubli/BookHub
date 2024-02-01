package com.sunayanahubli.bmsbackend.controller;

import com.sunayanahubli.bmsbackend.dto.BookDto;
import com.sunayanahubli.bmsbackend.service.BookService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
@CrossOrigin("*")
@AllArgsConstructor
@RequestMapping("/api/books")
@RestController
public class BookController {

    private BookService bookService;


    //REST API for adding new book
    @PostMapping
    public ResponseEntity<BookDto> createBook( @RequestBody BookDto bookDto)
    {
        BookDto b=  bookService.createBook( bookDto);
        return new ResponseEntity<>(b, HttpStatus.CREATED);

    }

    @GetMapping("{id}")
    public ResponseEntity<BookDto> getBook(@PathVariable("id") Long bookId)
    {
        BookDto bookDto=bookService.getBookById(bookId);
        return ResponseEntity.ok(bookDto);
    }

    @GetMapping()
    public List<BookDto> getBooks()
    {
        List<BookDto> bookDtos=bookService.getAllBooks();
        return new ResponseEntity<>(bookDtos,HttpStatus.OK).getBody();
    }

    @PutMapping("{id}")
    public ResponseEntity<BookDto>  updateBook(@PathVariable("id") Long bookId, @RequestBody BookDto updatedBookDto)
    {
        BookDto bookDto= bookService.updateBook(bookId,updatedBookDto);
        return ResponseEntity.ok(bookDto);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteBook(@PathVariable("id") Long bookId)
    {
        bookService.deleteBook(bookId);
        return new ResponseEntity<>("Book Deleted Successfully" , HttpStatus.OK);
    }

}
