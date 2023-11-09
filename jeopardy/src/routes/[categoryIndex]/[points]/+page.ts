import type { Load } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export const load: Load = ({ params }) => {
  const { categoryIndex, points } = params;
  return {
    categoryIndex: categoryIndex,
    points: points
  };
};
