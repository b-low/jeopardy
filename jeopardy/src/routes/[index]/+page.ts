import type { Load } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export const load: Load = ({ params }) => {
  const { index } = params;
  return {
    index: index
  };
};
