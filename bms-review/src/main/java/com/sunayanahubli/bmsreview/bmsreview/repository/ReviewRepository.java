package com.sunayanahubli.bmsreview.bmsreview.repository;

import com.sunayanahubli.bmsreview.bmsreview.entitiy.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByBookTitle(String bookTitle);

    List<Review> findByReviewerName(String reviewerName);

    List<Review> findByReviewerNameAndBookTitle(String reviewerName , String bookTitle);


}

