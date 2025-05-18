import React from 'react'
import styles from './Reviews.module.css'

const reviewData = {
  average: 5.0,
  total: 2, 
  breakdown: {
    5: 2,
    4: 0,
    3: 0,
    2: 0, 
    1: 0
  }
}

const Reviews = () => {

  const { average, total, breakdown } = reviewData;


  return (
        <main>
        <div>
            <div>
                <h2>Your reviews</h2>
                <span>last 30 days</span>
            </div>
            <div>
                {average.toFixed(1)} <span>★</span>
                <span>overall rating</span>
            </div>

            {[5, 4, 3, 2, 1].map(star => {
                const count = breakdown[star] || 0;
                const percent = total > 0 ? (count / total) * 100 : 0;

                return (
                    <div key={star}>
                        <div>{star} stars</div>
                        <div>
                            <div className={`h-full rounded-full ${
                                star === 5 ? "bg-orange-400" : "bg-gray-400"
                            }`} style={{ width: `${percent}%` }} />
                        </div>
                        <div>{Math.round(percent)}%</div>
                    </div>
                );
            })}

            <p>Reviews ({total})</p>
        </div>
        </main>
    );
}

export default Reviews