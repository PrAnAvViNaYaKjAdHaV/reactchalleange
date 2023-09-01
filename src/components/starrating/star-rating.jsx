import { useState } from 'react';
import styled from 'styled-components';
import { PropTypes } from "prop-types";
const StarRatingWrapper = styled.div`
  display: inline-block;
`;

const Star = styled.span`
  font-size: 24px;
  cursor: pointer;
  color: ${props => (props.filled ? '#ffc107' : '#e4e5e9')};
`;

const Ratingstar = ({ initialRating }) => {
    const [rating] = useState(initialRating || 0);

    return (
        <StarRatingWrapper>
            {[1, 2, 3, 4, 5].map(star => (
                <Star
                    key={star}
                    filled={star <= rating}
                >
                    ★
                </Star>
            ))}
        </StarRatingWrapper>
    );
};

export default Ratingstar;

Ratingstar.propTypes = {
    initialRating: PropTypes.number.required
}