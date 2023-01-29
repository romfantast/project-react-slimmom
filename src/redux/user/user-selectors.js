export const selectUsername = state => state?.user?.username;
export const selectIsLogin = state => state?.user?.isLoggedIn;
export const selectNotAllowedProducts = state =>
  state?.user?.userData?.notAllowedProducts;
export const selectDailyRate = state => state?.user?.userData?.dailyRate;
export const selectUserId = state => state?.user?.id;
