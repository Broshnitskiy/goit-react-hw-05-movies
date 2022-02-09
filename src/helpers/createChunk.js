import { lazy } from 'react';

export const createChunk = componentName => {
  return lazy(() =>
    import(`../Views/${componentName}`).then(module => ({
      default: module[componentName],
    }))
  );
};
