import React from 'react';
import styles from './Reviews.module.css';
import { reviewData } from './reviewData';


const Reviews = () => {
  const { average, total, breakdown, reviews } = reviewData;

  return (
    <main className={styles.reviewsContainer}>
      <div className={styles.header}>
        <h2>Your reviews</h2>
        <span className='lastDays'>last <u>30 days</u></span>
      </div>

      <div className={styles.ratingSection}>
        <span className={styles.overallRatingN}>{average.toFixed(1)}</span>
        <span className="starIcon">★</span>
        <span className={styles.overallRatingT}>overall rating</span>
      </div>

      <div className={styles.breakdown}>
        {[5, 4, 3, 2, 1].map(star => {
          const count = breakdown[star] || 0;
          const percent = total > 0 ? (count / total) * 100 : 0;

          return (
            <div key={star} className={styles.ratingBar}>
              <span>{star} stars</span>
              <div className={styles.barTrack}>
                <div
                  className={styles.barFill}
                  style={{ width: `${percent}%`, backgroundColor: star === 5 ? '#FF8C38' : '#B9B9B9' }}
                />
              </div>
              <span>{Math.round(percent)}%</span>
            </div>
          );
        })}
      </div>

      <div className={styles.reviewList}>
        <h2>Reviews ({total})</h2>
        {reviews.map((review, index) => (
          <div key={index} className={styles.reviewItem}>
            <div className="starIcon">{'★'.repeat(review.rating)}</div>
            <div className={styles.name}>{review.name} <u>{review.date}</u></div>
            <div className={styles.text}>{review.text}</div>
            <hr></hr>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Reviews;
