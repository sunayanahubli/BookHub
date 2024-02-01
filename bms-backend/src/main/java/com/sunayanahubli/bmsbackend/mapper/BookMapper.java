package com.sunayanahubli.bmsbackend.mapper;

import com.sunayanahubli.bmsbackend.dto.BookDto;
import com.sunayanahubli.bmsbackend.entity.Book;

public class BookMapper {

    public static BookDto mapToBookDto(Book book) {
        return new BookDto(
                book.getId(), book.getTitle(), book.getAuthor(), book.getIsbn());
    }

    public static Book mapToBook(BookDto bookDto) {
        return new Book(
                bookDto.getId(),
                bookDto.getTitle(),
                bookDto.getAuthor(),
                bookDto.getIsbn()
        );
    }
}