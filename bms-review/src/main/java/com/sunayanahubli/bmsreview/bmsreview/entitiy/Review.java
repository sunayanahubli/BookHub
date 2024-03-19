package com.sunayanahubli.bmsreview.bmsreview.entitiy;
import jakarta.persistence.*;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "reviews")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
            private Long id;

    @Column(name="reviewerName", nullable = false)
    String reviewerName;
    
    @Column(name="reviewText")
    String reviewText;

    @Column(name="bookTitle", nullable = false)
    String bookTitle;

    @Column(name="rating",  nullable = false)
    Integer rating;
}
