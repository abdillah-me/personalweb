export const UPDATE_PORTFOLIO = "UPDATE_PORTFOLIO";

export const updatePortfolio = (newPortfolio) => ({
   type: UPDATE_PORTFOLIO,
   payload: newPortfolio,
});
