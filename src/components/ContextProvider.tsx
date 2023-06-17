import React from "react";
import { ReactNode, useState } from "react";
import ScrollContext, { IScrollState } from "../context/ScrollContext";

export default function ContextProvider({ children }: { children: ReactNode }) {
    const [scrollState, setScrollState] = useState<IScrollState>({ scrollIndex: 0 });

    return <ScrollContext.Provider value={{scrollState, setScrollState}}>
        {children}
    </ScrollContext.Provider>
}