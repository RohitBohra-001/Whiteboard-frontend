import { createContext } from "react";

const BoardContext = createContext({
    activeToolItem: "",
    elements: [],
    boardMouseDownHandler: () => {},
    handleToolItemClick: () => {},
});

export default BoardContext;
