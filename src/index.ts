export interface StoreResetOptions {
    action?: string;
}

const defaultOptions: StoreResetOptions = {
    action: 'RESET_STORE',
};

export function storeReset(options: StoreResetOptions) {
    const { action: actionType } = Object.assign({}, defaultOptions, options || {});
    return reducer => (state, action) => {
        if (action.type === actionType) {
            state = undefined;
        }
        return reducer(state, action);
    };
}
