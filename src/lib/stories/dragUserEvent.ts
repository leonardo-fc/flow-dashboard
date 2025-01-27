import { fireEvent } from "@testing-library/dom";
import { instrument } from "@storybook/instrumenter";
import { sleep } from "../sleep";

export const { mouseDrag } = instrument(
  { mouseDrag: _mouseDrag },
  { intercept: true, retain: false },
);

async function _mouseDrag(
  element: Element,
  {
    to: inTo,
    delta,
    steps = 20,
    duration = 500,
  }: (
    | {
        to: { x: number; y: number } | Element;
        delta?: undefined;
      }
    | {
        to?: undefined;
        delta: { x: number; y: number };
      }
  ) & {
    steps?: number;
    duration?: number;
  },
) {
  await sleep(0); // ensure Flow rendered
  const from = getElementClientCenter(element);

  const to = delta
    ? {
        x: from.x + delta.x,
        y: from.y + delta.y,
      }
    : getCoords(inTo);

  const step = {
    x: (to.x - from.x) / steps,
    y: (to.y - from.y) / steps,
  };

  const current = {
    clientX: from.x,
    clientY: from.y,
    view: window,
  } satisfies MouseEventInit;

  fireEvent.mouseEnter(element, current);
  fireEvent.mouseOver(element, current);
  fireEvent.mouseMove(element, current);
  fireEvent.mouseDown(element, current);
  for (let i = 0; i < steps; i++) {
    current.clientX += step.x;
    current.clientY += step.y;
    await sleep(duration / steps);
    fireEvent.mouseMove(element, current);
  }
  fireEvent.mouseUp(element, current);
}

export const { dragAndDrop } = instrument(
  { dragAndDrop: _dragAndDrop },
  { intercept: true, retain: false },
);

async function _dragAndDrop(
  element: Element,
  {
    to: inTo,
    delta,
  }:
    | {
        to: { x: number; y: number } | Element;
        delta?: undefined;
      }
    | {
        to?: undefined;
        delta: { x: number; y: number };
      },
) {
  await sleep(0); // ensure Flow rendered
  const from = getElementClientCenter(element);

  const to = delta
    ? {
        x: from.x + delta.x,
        y: from.y + delta.y,
      }
    : getCoords(inTo);

  const current: DragEventInit = {
    clientX: from.x,
    clientY: from.y,
    dataTransfer: new DataTransfer(),
  };

  fireEvent(element, new DragEvent("dragstart", current));

  current.clientX = to.x;
  current.clientY = to.y;
  current.bubbles = true;

  const toElement = document.elementFromPoint(to.x, to.y)!;
  fireEvent(toElement, new DragEvent("drop", current));
}

// https://stackoverflow.com/a/53946549/1179377
function isElement(obj: unknown): obj is Element {
  if (typeof obj !== "object") {
    return false;
  }
  let prototypeStr, prototype;
  do {
    prototype = Object.getPrototypeOf(obj);
    // to work in iframe
    prototypeStr = Object.prototype.toString.call(prototype);
    // '[object Document]' is used to detect document
    if (
      prototypeStr === "[object Element]" ||
      prototypeStr === "[object Document]"
    ) {
      return true;
    }
    obj = prototype;
    // null is the terminal of object
  } while (prototype !== null);
  return false;
}

function getElementClientCenter(element: Element) {
  const { left, top, width, height } = element.getBoundingClientRect();

  return {
    x: left + width / 2,
    y: top + height / 2,
  };
}

const getCoords = (charlie: { x: number; y: number } | Element) =>
  isElement(charlie) ? getElementClientCenter(charlie) : charlie;
