import React from "react";
import { Highlight, connectHits } from "react-instantsearch-dom";

// Import framer notion anim library
import { motion, AnimateSharedLayout } from "framer-motion";

const HitsComponent = () => {
  return (
    <div>
      <CustomHits />
    </div>
  );
};

export default HitsComponent;

const Hits = ({ hits }) => {
  // const dispatch = useDispatch();
  const listItem = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
      },
    },
  };
  return (
    <AnimateSharedLayout>
      <div className="hits-wrapper">
        <ul className="hits-list">
          {hits.map((hit) => (
            <motion.li
              key={hit.objectID}
              variants={listItem}
              initial="hidden"
              animate="show"
              className="hit-list"
              onClick={() => {}}
            >
              <div className="weight__wrapper">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6186 2.29584C11.6186 1.77419 11.1964 1.35233 10.6758 1.35233H4.32438C3.80347 1.35233 3.38086 1.77421 3.38086 2.29584V3.08184H11.6184L11.6186 2.29584Z"
                    fill="#B7B4B4"
                  />
                  <path
                    d="M12.1006 4.57005L11.6321 3.71057H3.3695L2.89966 4.57005V5.39655C2.89966 5.73221 3.03057 6.03439 3.239 6.26466V10.3335C3.239 10.5071 3.37963 10.6477 3.55366 10.6477H11.4477C11.621 10.6477 11.7624 10.5071 11.7624 10.3335V6.26466C11.9705 6.03439 12.1002 5.7318 12.1002 5.39655V4.57005H12.1006ZM3.86769 6.64712C3.97341 6.67558 4.08365 6.69508 4.19842 6.69508C4.66415 6.69508 5.06954 6.44799 5.2994 6.07936C5.47342 6.35911 5.74865 6.5687 6.07569 6.65349V10.0188H3.86769V6.64712ZM6.70419 10.0187V6.65676C7.0391 6.57574 7.32294 6.36463 7.49999 6.07929C7.72908 6.44751 8.13447 6.69501 8.60137 6.69501C9.06678 6.69501 9.47217 6.44792 9.70201 6.07929C9.93078 6.44751 10.3357 6.69501 10.8022 6.69501C10.9173 6.69501 11.0269 6.67551 11.1337 6.64705V10.0186L6.70419 10.0187Z"
                    fill="#B7B4B4"
                  />
                  <path
                    d="M5.77064 8.20091C5.77064 8.44717 5.571 8.64682 5.32481 8.64682C5.07856 8.64682 4.87891 8.44718 4.87891 8.20091C4.87891 7.95465 5.07854 7.755 5.32481 7.755C5.57098 7.755 5.77064 7.95464 5.77064 8.20091Z"
                    fill="#B7B4B4"
                  />
                </svg>
                <p className="weight__text">{hit.StoreName}</p>
              </div>
              <div className="infos">
                <h3>
                  <Highlight hit={hit} attribute="Sku" />
                </h3>
                <p>{hit.Address1}</p>
                <p>{hit.Address2}</p>
              </div>
              <div className="phone">
                <p>{hit.Phone}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </AnimateSharedLayout>
  );
};

const CustomHits = connectHits(Hits);
