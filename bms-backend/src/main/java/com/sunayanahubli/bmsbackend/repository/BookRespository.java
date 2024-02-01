package com.sunayanahubli.bmsbackend.repository;

import com.sunayanahubli.bmsbackend.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRespository extends JpaRepository<Book, Long> {
}
