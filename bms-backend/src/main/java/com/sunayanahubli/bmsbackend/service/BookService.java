package com.sunayanahubli.bmsbackend.service;

import com.sunayanahubli.bmsbackend.dto.BookDto;

import java.util.*;

public interface BookService {


     BookDto createBook(BookDto bookDto);

     BookDto getBookById(Long ID);

     List<BookDto> getAllBooks();

     BookDto updateBook(Long ID, BookDto bookDto);

     void deleteBook(Long ID);


}
