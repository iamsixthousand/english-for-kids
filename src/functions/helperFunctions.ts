type RandomizerFunc = () => number;
// eslint-disable-next-line no-unused-vars
type ToArrayId = (id: string) => number;

export const randomizerFunc: RandomizerFunc = () => Math.random() - 0.5;
// to randomize sort method
export const toArrayId: ToArrayId = (id: string) => Number(id) - 1;
// to give useParam id a number value and decrease by 1 to match an array index
