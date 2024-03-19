package com.sunayanahubli.bmsreview.bmsreview.controller;

import com.sunayanahubli.bmsreview.bmsreview.dto.ReviewDto;
import com.sunayanahubli.bmsreview.bmsreview.entitiy.Review;
import com.sunayanahubli.bmsreview.bmsreview.service.ReviewService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@AllArgsConstructor
@RequestMapping("/api/reviews")
@RestController
public class ReviewController {

    private ReviewService reviewService;

    @PostMapping()
    public ResponseEntity<ReviewDto> createReview(@RequestBody ReviewDto reviewDto)
    {
        ReviewDto b=reviewService.createReview(reviewDto);
        return new ResponseEntity<>(b, HttpStatus.CREATED);

    }

    @GetMapping()
    public List<ReviewDto> viewReviews(@RequestParam(required = false) String reviewerName,
                                                      @RequestParam(required = false) String bookTitle)
    {
        return reviewService.getReviews(reviewerName, bookTitle);
    }

}
