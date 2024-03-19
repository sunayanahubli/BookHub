package com.sunayanahubli.bmsreview.bmsreview.service;

import com.sunayanahubli.bmsreview.bmsreview.dto.ReviewDto;

import java.util.List;

public interface ReviewService {
    List<ReviewDto> getReviews(String reviewerName, String bookTitle);

    ReviewDto createReview(ReviewDto reviewDto);
}
