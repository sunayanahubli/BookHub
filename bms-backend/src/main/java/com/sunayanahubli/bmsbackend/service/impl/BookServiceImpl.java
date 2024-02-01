package com.sunayanahubli.bmsbackend.service.impl;
import com.sunayanahubli.bmsbackend.dto.BookDto;
import com.sunayanahubli.bmsbackend.entity.Book;
import com.sunayanahubli.bmsbackend.exception.ResourceNotFoundException;
import com.sunayanahubli.bmsbackend.mapper.BookMapper;
import com.sunayanahubli.bmsbackend.repository.BookRespository;
import com.sunayanahubli.bmsbackend.service.BookService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.Optional;
import java.util.stream.Collectors;

@Service //tells spring boot to generate bean
@AllArgsConstructor
public class BookServiceImpl implements BookService {
    //needed for  saving to database, it extends jpa interface so tht is used to save to DB
    private BookRespository bookRespository;

    @Override
    public BookDto createBook(BookDto bookDto)
    {
        Book book= BookMapper.mapToBook(bookDto);
        Book savedBook= bookRespository.save(book);
        return BookMapper.mapToBookDto(savedBook);
    }

    @Override
    public BookDto getBookById(Long id) {

       Book book= bookRespository.findById(id)
               .orElseThrow(() ->
                       new ResourceNotFoundException("Book not found. ID: "+ id));
        return BookMapper.mapToBookDto(book);
    }

    @Override
    public List<BookDto> getAllBooks() {
        List<Book> books= bookRespository.findAll();
        return books.stream().map(BookMapper::mapToBookDto).collect(Collectors.toList());
    }

    @Override
    public BookDto updateBook(Long ID, BookDto bookDto) {
       Book book =bookRespository.findById(ID).orElseThrow(()-> new ResourceNotFoundException("Book not found: ID: "+ID));
       if(bookDto.getTitle()!=null)
       book.setTitle(bookDto.getTitle());
       if(bookDto.getAuthor()!=null)
       book.setAuthor(bookDto.getAuthor());
       if(bookDto.getIsbn()!=null)
       book.setIsbn(bookDto.getIsbn());
       bookRespository.save(book);
       return BookMapper.mapToBookDto(book) ;
    }

    @Override
    public void deleteBook(Long ID) {
        Book book=bookRespository.findById(ID).orElseThrow(()->new ResourceNotFoundException("Book not found. ID:"+ ID));
        bookRespository.delete(book);
    }

}
