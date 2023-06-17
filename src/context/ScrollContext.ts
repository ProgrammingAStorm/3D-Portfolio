import { createContext } from "react"

interface IScrollContextProvider {
    scrollState?: IScrollState,
    setScrollState?: Function
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