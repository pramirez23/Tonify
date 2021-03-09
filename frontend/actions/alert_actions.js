export const OPEN_ALERT = "OPEN_ALERT";
export const CLOSE_ALERT = "CLOSE_ALERT";

export const openAlert = () => ({
  type: OPEN_ALERT,
  alert: "Open"
});

export const closeAlert = () => ({
  type: CLOSE_ALERT
});