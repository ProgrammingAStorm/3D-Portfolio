import { createContext } from "react"

interface IScrollContextProvider {
    scrollState?: IScrollState,
    setScrolleState?: Function
}

interface IScrollState {
    scrollIndex: number,
}

export {
    IScrollState,
    IScrollContextProvider
}

const ScrollContext = createContext<IScrollContextProvider>({});

export default ScrollContext;