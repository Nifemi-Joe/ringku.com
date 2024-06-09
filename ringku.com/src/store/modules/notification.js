import { createSlice } from "@reduxjs/toolkit";

/**
 * @typedef {Object} ModalType
 * @property {boolean} [show]
 * @property {'success' | 'error'} type
 * @property {string} title
 * @property {string} body
 */

/**
 * @typedef {Object} NotificationState
 * @property {ModalType} modal
 */

/** @type {NotificationState} */
const initialState = {
    modal: /** @type {ModalType} */ ({}),
};

const slice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        /**
         * @param {NotificationState} state
         * @param {{ payload: ModalType }} action
         */
        openModal(state, action) {
            const { payload } = action;
            state.modal.type = payload.type;
            state.modal.title = payload.title;
            state.modal.body = payload.body;
            state.modal.show = true;
            console.log(state.modal);
        },
        /**
         * @param {NotificationState} state
         */
        closeModal(state) {
            state.modal = /** @type {ModalType} */ ({});
            state.modal.show = false;
        }
    },
});

export const notification = {
    reducer: slice.reducer,
    mutation: slice.actions,
};
