/**
 * Serialize and deserialize add node data to/from `DragEvent.dataTransfer`
 */
export const serdeNodeDrag = {
  format: "application/svelteflow",
  toString(p: { type: string; originX: number; originY: number }) {
    return `${p.type},${p.originX},${p.originY}`;
  },
  fromString(raw: string) {
    const [type, originX, originY] = raw.split(",");
    if (!type || !originX || !originY) return;

    return {
      type,
      originX: parseFloat(originX),
      originY: parseFloat(originY),
    };
  },
};
