export const OPEN_ALERT = "OPEN_ALERT";
export const CLOSE_ALERT = "CLOSE_ALERT";

export const openAlert = (alertType) => ({
  type: OPEN_ALERT,
  alert: alertType
});

export const closeAlert = () => ({
  type: CLOSE_ALERT
});