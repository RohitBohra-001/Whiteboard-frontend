import React, { useContext } from "react";
import classes from "./Toolbar.module.css";
import cx from "classnames";
import { LuRectangleHorizontal } from "react-icons/lu";
import { FaSlash } from "react-icons/fa";
import {TOOL_ITEMS} from "../../constants/";
import BoardContext from "../../store/board-context";

const Toolbar = () => {
  const {activeToolItem, handleToolItemClick} = useContext(BoardContext);

  return (
    <div className={classes.container}>
      <div
        className={cx(classes.toolItem, {
          [classes.active]: activeToolItem === TOOL_ITEMS.LINE,
        })}
        onClick={() => handleToolItemClick(TOOL_ITEMS.LINE)}
      >
        <FaSlash />
      </div>
      <div
        className={cx(classes.toolItem, {
          [classes.active]: activeToolItem === TOOL_ITEMS.RECTANGLE,
        })}
        onClick={() => handleToolItemClick(TOOL_ITEMS.RECTANGLE)}
      >
        <LuRectangleHorizontal />
      </div>
    </div>
  );
};

export default Toolbar;