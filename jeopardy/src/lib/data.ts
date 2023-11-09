export enum Category {
  I = 'i',
  NO = 'no',
  RI = 'ri',
  MI = 'mi',
  NA = 'na',
  SE = 'se'
}

interface AnswerDefinition {
  series: string;
  filename: string;
  ed?: boolean;
}
const answers: {
  [key in Category]: [
    AnswerDefinition,
    AnswerDefinition,
    AnswerDefinition,
    AnswerDefinition,
    AnswerDefinition
  ];
} = {
  [Category.I]: [
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
      ed: true
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
  [Category.NO]: [
    {
      series: "Ao-chan Can't Study!",
      filename: 'ao.mp4'
    },
    {
      series: 'Rent-a-Girlfriend',
      filename: 'rag_ed.mp4',
      ed: true
    },
    {
      series: 'Domestic Girlfriend',
      filename: 'domestic.mp4'
    },
    {
      series: 'Black Summoner',
      filename: 'summoner.mp4'
    },
    {
      series: 'ASSASSINS PRIDE',
      filename: 'assassins.mp4'
    }
  ],
  [Category.RI]: [
    {
      series: 'takt op.Destiny',
      filename: 'takt.mp4'
    },
    {
      series: 'My Next Life as a Villainess: All Routes Lead to Doom!',
      filename: 'villainess.mp4'
    },
    {
      series: 'Is It Wrong to Try to Pick Up Girls in a Dungeon? IV Part 2',
      filename: 'dungeon.mp4'
    },
    {
      series: 'My Love Story with Yamada-kun at Lv999',
      filename: 'yamada_ed.mp4',
      ed: true
    },
    {
      series: 'Princess Connect! Re:Dive Season 2',
      filename: 'princess.mp4'
    }
  ],
  [Category.MI]: [
    {
      series: 'Gabriel DropOut',
      filename: 'gab_ed.mp4',
      ed: true
    },
    {
      series: 'Is the Order a Rabbit?',
      filename: 'rabbit.mp4'
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
      series: 'Actually, I Am',
      filename: 'actually.mp4'
    }
  ],
  [Category.NA]: [
    {
      series: 'The Quintessential Quintuplets',
      filename: 'quints_ed.mp4',
      ed: true
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
  [Category.SE]: [
    {
      series: 'Your lie in April',
      filename: 'april.mp4'
    },
    {
      series: 'The Case Study of Vanitas',
      filename: 'vanitas.mp4'
    },
    {
      series: "Masamune-kun's Revenge",
      filename: 'masamune.mp4'
    },
    {
      series: 'Dead Mount Death Play',
      filename: 'dead_ed.mp4',
      ed: true
    },
    {
      series: 'A Place Further Than the Universe',
      filename: 'universe.mp4'
    }
  ]
};

export type Answer = AnswerDefinition & {
  category: Category;
  score: number;
};
let grid: Answer[] = Array(30);
Object.entries(answers).forEach(([category, categoryAnswers], categoryIndex) => {
  categoryAnswers.forEach((answer, answerIndex) => {
    grid[answerIndex * 6 + categoryIndex] = {
      ...answer,
      category: category as Category,
      score: answerIndex * 100 + 100
    };
  });
});

export { grid };
