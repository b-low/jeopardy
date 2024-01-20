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
      return 'Insert Falsetto';
    case AnswerCategory.CATEGORY_2:
      return 'Worldwide-san';
    case AnswerCategory.CATEGORY_3:
      return "Gaze and 'do";
    case AnswerCategory.CATEGORY_4:
      return 'McCarthyism';
    case AnswerCategory.CATEGORY_5:
      return 'AOTY 2023';
    case AnswerCategory.CATEGORY_6:
      return 'SOTY 2023';
    case AnswerCategory.CATEGORY_7:
      return 'Algorhythm 2023';
    case AnswerCategory.CATEGORY_8:
      return 'RIP 2023';
    case 'EXAMPLE':
      return "It's free real estate";
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
      series: 'Kill la Kill',
      filename: 'klk.mp4',
      volume: 0.3
    },
    {
      series: 'Carole & Tuesday',
      filename: 'carole.mp4',
      volume: 0.5
    },
    {
      series: 'Rascal Does Not Dream of Bunny Girl Senpai',
      filename: 'bgs.mp4',
      volume: 0.35
    },
    {
      series: 'Kakegurui',
      filename: 'kakegurui.mp4',
      volume: 1.1
    },
    {
      series: 'Eromanga Sensei OVA 1',
      filename: 'eromanga.mp4',
      source: SongSource.OVA
    }
  ],
  [AnswerCategory.CATEGORY_2]: [
    {
      series: 'Saga of Tanya the Evil',
      filename: 'tanya.mp4',
      source: SongSource.ENDING
    },
    {
      series: 'Elfen Lied',
      filename: 'elfen.mp4',
      volume: 0.6
    },
    {
      series: 'Kizumonogatari Part 3: Reiketsu',
      filename: 'kizu.mp4',
      source: SongSource.MOVIE,
      // source: SongSource.ENDING,
      volume: 3
    },
    {
      series: 'The Executioner and Her Way of Life',
      filename: 'executioner.mp4'
    },
    {
      series: 'Wasteful Days of High School Girls',
      filename: 'wasteful.mp4',
      volume: 0.3
    }
  ],
  [AnswerCategory.CATEGORY_3]: [
    {
      series: 'Shokugeki no Souma',
      filename: 'shokugeki.mp4',
      volume: 1.4
    },
    {
      series: 'We Never Learn: BOKUBEN',
      filename: 'bokuben.mp4',
      source: SongSource.ENDING,
      volume: 0.3
    },
    {
      series: "I've Been Killing Slimes for 300 Years and Maxed Out My Level",
      filename: 'slime.mp4'
    },
    {
      series: 'Ascendance of a Bookworm',
      filename: 'bookworm.mp4'
    },
    {
      series: 'MM!',
      filename: 'mm.mp4',
      volume: 0.8
    }
  ],
  [AnswerCategory.CATEGORY_4]: [
    {
      series: 'Classroom of the Elite',
      filename: 'elite.mp4'
    },
    {
      series: 'Spice and Wolf',
      filename: 'spice.mp4'
    },
    {
      series: 'Akiba Maid War',
      filename: 'akiba.mp4'
    },
    {
      series: "Today's Menu for the Emiya Family",
      filename: 'menu.mp4'
    },
    {
      series: 'Outbreak Company',
      filename: 'outbreak.mp4'
    }
  ],
  [AnswerCategory.CATEGORY_5]: [
    {
      series: 'The Apothecary Diaries',
      filename: 'apothecary.mp4',
      volume: 1.5
    },
    {
      series: 'KamiKatsu: Working for God in a Godless World',
      filename: 'kamikatsu.mp4'
    },
    {
      series: 'The Dangers in My Heart',
      filename: 'dangers.mp4'
    },
    {
      series: 'The Reincarnation of the Strongest Exorcist in Another World',
      filename: 'exorcist.mp4'
    },
    {
      series: 'Handyman Saitou in Another World',
      filename: 'saitou.mp4'
    }
  ],
  [AnswerCategory.CATEGORY_6]: [
    {
      series: 'Oshi No Ko',
      filename: 'oshi.mp4',
      source: SongSource.ENDING,
      volume: 1.5
    },
    {
      series: 'I Got a Cheat Skill in Another World and Became Unrivaled in The Real World, Too',
      filename: 'cheat.mp4'
    },
    {
      series: "ONIMAI: I'm Now Your Sister!",
      filename: 'onimai.mp4',
      volume: 1.2
    },
    {
      series: 'Undead Murder Farce',
      filename: 'farce.mp4'
    },
    {
      series: 'Record of Ragnarok II',
      filename: 'ragnarok.mp4',
      volume: 0.6
    }
  ],
  [AnswerCategory.CATEGORY_7]: [
    {
      series: 'BLUELOCK',
      filename: 'bluelock.mp4',
      volume: 0.35
    },
    {
      series: "Hell's Paradise: Jigokuraku",
      filename: 'hell.mp4'
    },
    {
      series: 'Urusei Yatsura (2022)',
      filename: 'yatsura.mp4',
      volume: 0.8
    },
    {
      series: 'Helck',
      filename: 'helck.mp4'
    },
    {
      series: 'Otaku Elf',
      filename: 'otaku.mp4',
      volume: 0.5
    }
  ],
  [AnswerCategory.CATEGORY_8]: [
    {
      series: 'Zom 100: Bucket List of the Dead',
      filename: 'zom.mp4'
    },
    {
      series: 'Tokyo Revengers Season 2',
      filename: 'revengers.mp4',
      source: SongSource.ENDING,
      volume: 0.3
    },
    {
      series: 'The Kingdoms of Ruin',
      filename: 'ruin.mp4'
    },
    {
      series: 'Arknights: PERISH IN FROST',
      filename: 'arknights.mp4',
      source: SongSource.ENDING
    },
    {
      series: 'PSYCHO-PASS: Providence',
      filename: 'psycho.mp4',
      source: SongSource.MOVIE,
      // source: SongSource.ENDING,
      volume: 0.6
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
