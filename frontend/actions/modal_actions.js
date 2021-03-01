export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (id, modal) => ({
    type: OPEN_MODAL,
    id,
    modal
});

export const closeModal = () => ({
    type: CLOSE_MODAL
});