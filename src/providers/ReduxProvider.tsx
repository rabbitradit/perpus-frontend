'use client';

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persist, reduxStore } from "@/redux/store";
import { ReactNode } from "react";
import { IReactQueryProps } from './types';

export default function ReduxProvider({children}:IReactQueryProps ){
    return(
        <Provider store={reduxStore}>
            <PersistGate loading={null} persistor={persist}>
                {children}
            </PersistGate>
        </Provider>
    )
}