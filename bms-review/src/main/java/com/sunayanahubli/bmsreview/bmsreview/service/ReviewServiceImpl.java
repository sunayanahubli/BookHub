package com.sunayanahubli.bmsreview.bmsreview.service;

import com.sunayanahubli.bmsreview.bmsreview.dto.ReviewDto;
import com.sunayanahubli.bmsreview.bmsreview.entitiy.Review;
import com.sunayanahubli.bmsreview.bmsreview.mapper.ReviewMapper;
import com.sunayanahubli.bmsreview.bmsreview.repository.ReviewRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ReviewServiceImpl implements ReviewService{

    private  ReviewRepository reviewRepository;
    @Override
    public List<ReviewDto> getReviews(String reviewerName, String bookTitle) {

       List<Review> reviews;
      if(reviewerName!=null && bookTitle !=null)
          reviews=reviewRepository.findByReviewerNameAndBookTitle(reviewerName,bookTitle);
     else if(reviewerName==null && bookTitle ==null)
         reviews=reviewRepository.findAll();
     else if(reviewerName!=null)
          reviews=reviewRepository.findByReviewerName(reviewerName);
     else
         reviews=reviewRepository.findByBookTitle(bookTitle);

        return reviews.stream().map(ReviewMapper::mapToReviewDto).collect(Collectors.toList());

    }

    @Override
    public ReviewDto createReview(ReviewDto reviewDto) {

        return ReviewMapper.mapToReviewDto(reviewRepository.save(ReviewMapper.mapToReview(reviewDto)));
    }
}
