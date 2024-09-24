import { createXRStore } from '@react-three/xr';

const store = createXRStore({
  hand: { teleportPointer: true },
  controller: { teleportPointer: true },
});

export default store;
