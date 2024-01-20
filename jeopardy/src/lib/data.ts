import {
  AnswerCategory,
  type Answer,
  type AnswerDefinition,
  type Category,
  answerCategories,
  SongSource
} from './types';

export function getCategoryTitle(category: Category): string {
  switch (category) {
    case AnswerCategory.CATEGORY_1:
      return '<span class="inori">I</span>n another world with my Pixel 8 Pro on sale now for $999';
    case AnswerCategory.CATEGORY_2:
      return "Don't judge an anime by its opening covers";
    case AnswerCategory.CATEGORY_3:
      return '<span class="inori">Ri</span>zz is so stupid they call it Deen/stay night';
    case AnswerCategory.CATEGORY_4:
      return '<span class="inori">Mi</span>croplastic memories';
    case AnswerCategory.CATEGORY_5:
      return '<span class="inori">Na</span>rcotics';
    case AnswerCategory.CATEGORY_6:
      return '<span class="inori">Se</span>asonear worm';
    case 'EXAMPLE':
      return 'Bingo free space';
    default:
      return '';
  }
}

const answers: {
  [key in AnswerCategory]: [
    AnswerDefinition,
    AnswerDefinition,
    AnswerDefinition,
    AnswerDefinition,
    AnswerDefinition
  ];
} = {
  [AnswerCategory.CATEGORY_1]: [
    {
      series: 'Re:ZERO -Starting Life in Another World-',
      filename: 'zero.mp4'
    },
    {
      series: 'ISEKAI QUARTET',
      filename: 'quartet.mp4'
    },
    {
      series: 'The Eminence in Shadow',
      filename: 'eminence_ed.mp4',
      source: SongSource.ENDING
    },
    {
      series: 'Re:CREATORS',
      filename: 'creators.mp4'
    },
    {
      series: 'How a Realist Hero Rebuilt the Kingdom',
      filename: 'realist.mp4'
    }
  ],
  [AnswerCategory.CATEGORY_2]: [
    {
      series: "Ao-chan Can't Study!",
      filename: 'ao.mp4'
    },
    {
      series: 'Domestic Girlfriend',
      filename: 'domestic.mp4'
    },
    {
      series: "Shikimori's Not Just a Cutie",
      filename: 'shikimori.mp4'
    },
    {
      series: 'ASSASSINS PRIDE',
      filename: 'assassins.mp4'
    },
    {
      series: 'Black Summoner',
      filename: 'summoner.mp4'
    }
  ],
  [AnswerCategory.CATEGORY_3]: [
    {
      series: 'takt op.Destiny',
      filename: 'takt.mp4'
    },
    {
      series: 'My Next Life as a Villainess: All Routes Lead to Doom!',
      filename: 'villainess.mp4'
    },
    {
      series: 'My Love Story with Yamada-kun at Lv999',
      filename: 'yamada_ed.mp4',
      source: SongSource.ENDING
    },
    {
      series: 'Is It Wrong to Try to Pick Up Girls in a Dungeon? IV Part 2',
      filename: 'dungeon.mp4'
    },
    {
      series: 'Princess Connect! Re:Dive Season 2',
      filename: 'princess.mp4'
    }
  ],
  [AnswerCategory.CATEGORY_4]: [
    {
      series: 'Gabriel DropOut',
      filename: 'gab_ed.mp4',
      source: SongSource.ENDING
    },
    {
      series: "Girls' Last Tour",
      filename: 'tour_op.mp4'
    },
    {
      series: 'Aharen-san wa Hakarenai',
      filename: 'aharen.mp4'
    },
    {
      series: 'Is the Order a Rabbit?',
      filename: 'rabbit.mp4'
    },
    {
      series: 'Actually, I Am',
      filename: 'actually.mp4'
    }
  ],
  [AnswerCategory.CATEGORY_5]: [
    {
      series: 'The Quintessential Quintuplets',
      filename: 'quints_ed.mp4',
      source: SongSource.ENDING
    },
    {
      series: 'Sleepy Princess in the Demon Castle',
      filename: 'sleepy.mp4'
    },
    {
      series: 'Spy Classroom',
      filename: 'spy.mp4'
    },
    {
      series: "Osamake: Romcom Where The Childhood Friend Won't Lose",
      filename: 'osamake.mp4'
    },
    {
      series: 'No Guns Life',
      filename: 'guns.mp4'
    }
  ],
  [AnswerCategory.CATEGORY_6]: [
    {
      series: 'Your lie in April',
      filename: 'april.mp4'
    },
    {
      series: "Masamune-kun's Revenge",
      filename: 'masamune.mp4'
    },
    {
      series: 'The Case Study of Vanitas',
      filename: 'vanitas.mp4'
    },
    {
      series: 'A Place Further Than the Universe',
      filename: 'universe.mp4'
    },
    {
      series: 'Dead Mount Death Play',
      filename: 'dead_ed.mp4',
      source: SongSource.ENDING
    }
  ]
};

const example: Answer = {
  series: 'Kaguya-sama: Love is War',
  filename: 'example_kaguya.mp4',
  index: -1,
  category: 'EXAMPLE',
  points: 100,
  example: true,
  volume: 1.5,
  source: SongSource.ENDING
};

// --------------------------------------------------------------------------------------------- //

const NUM_CATEGORIES = answerCategories.length;
let grid: Answer[] = Array(NUM_CATEGORIES * 5);
Object.entries(answers).forEach(([_category, categoryAnswers], categoryIndex) => {
  categoryAnswers.forEach((answer, answerIndex) => {
    let index = answerIndex * NUM_CATEGORIES + categoryIndex;
    grid[index] = {
      ...answer,
      index: index,
      category: answerCategories[categoryIndex],
      points: answerIndex * 100 + 100
    };
  });
});
export { grid };

export function getAnswer(index: number) {
  if (index === -1) {
    return example;
  }
  return grid[index];
}

export const NUM_ANSWERS = grid.length + 1; // include example for state storage
