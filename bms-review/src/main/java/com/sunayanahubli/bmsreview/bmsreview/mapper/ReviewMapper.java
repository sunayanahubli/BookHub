package com.sunayanahubli.bmsreview.bmsreview.mapper;

import com.sunayanahubli.bmsreview.bmsreview.dto.ReviewDto;
import com.sunayanahubli.bmsreview.bmsreview.entitiy.Review;


public class ReviewMapper {

    public static ReviewDto mapToReviewDto(Review review) {
        return new ReviewDto(
                review.getId(), review.getReviewerName(), review.getReviewText(),review.getBookTitle(), review.getRating());
    }

    public static Review mapToReview(ReviewDto reviewDto) {
        return new Review(
                reviewDto.getId(),
                reviewDto.getReviewerName(),
                reviewDto.getReviewText(),
                reviewDto.getBookTitle(),
                reviewDto.getRating()
        );
    }
}
