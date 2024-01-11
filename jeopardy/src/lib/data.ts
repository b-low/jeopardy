import {
  AnswerCategory,
  type Answer,
  type AnswerDefinition,
  type Category,
  answerCategories
} from './types';

export function getCategoryTitle(category: Category): string {
  switch (category) {
    case AnswerCategory.CATEGORY_1:
      return 'Category 1';
    case AnswerCategory.CATEGORY_2:
      return 'Category 2';
    case AnswerCategory.CATEGORY_3:
      return 'Category 3';
    case AnswerCategory.CATEGORY_4:
      return 'Category 4';
    case AnswerCategory.CATEGORY_5:
      return 'Category 5';
    case AnswerCategory.CATEGORY_6:
      return 'Category 6';
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
      series: 'Category 1 100',
      filename: '1_100.mp4'
    },
    {
      series: 'Category 1 200',
      filename: '1_200.mp4'
    },
    {
      series: 'Category 1 300',
      filename: '1_300.mp4'
    },
    {
      series: 'Category 1 400',
      filename: '1_400.mp4'
    },
    {
      series: 'Category 1 500',
      filename: '1_500.mp4'
    }
  ],
  [AnswerCategory.CATEGORY_2]: [
    {
      series: 'Category 2 100',
      filename: '2_100.mp4'
    },
    {
      series: 'Category 2 200',
      filename: '2_200.mp4'
    },
    {
      series: 'Category 2 300',
      filename: '2_300.mp4'
    },
    {
      series: 'Category 2 400',
      filename: '2_400.mp4'
    },
    {
      series: 'Category 2 500',
      filename: '2_500.mp4'
    }
  ],
  [AnswerCategory.CATEGORY_3]: [
    {
      series: 'Category 3 100',
      filename: '3_100.mp4'
    },
    {
      series: 'Category 3 200',
      filename: '3_200.mp4'
    },
    {
      series: 'Category 3 300',
      filename: '3_300.mp4'
    },
    {
      series: 'Category 3 400',
      filename: '3_400.mp4'
    },
    {
      series: 'Category 3 500',
      filename: '3_500.mp4'
    }
  ],
  [AnswerCategory.CATEGORY_4]: [
    {
      series: 'Category 4 100',
      filename: '4_100.mp4'
    },
    {
      series: 'Category 4 200',
      filename: '4_200.mp4'
    },
    {
      series: 'Category 4 300',
      filename: '4_300.mp4'
    },
    {
      series: 'Category 4 400',
      filename: '4_400.mp4'
    },
    {
      series: 'Category 4 500',
      filename: '4_500.mp4'
    }
  ],
  [AnswerCategory.CATEGORY_5]: [
    {
      series: 'Category 5 100',
      filename: '5_100.mp4'
    },
    {
      series: 'Category 5 200',
      filename: '5_200.mp4'
    },
    {
      series: 'Category 5 300',
      filename: '5_300.mp4'
    },
    {
      series: 'Category 5 400',
      filename: '5_400.mp4'
    },
    {
      series: 'Category 5 500',
      filename: '5_500.mp4'
    }
  ],
  [AnswerCategory.CATEGORY_6]: [
    {
      series: 'Category 6 100',
      filename: '6_100.mp4'
    },
    {
      series: 'Category 6 200',
      filename: '6_200.mp4'
    },
    {
      series: 'Category 6 300',
      filename: '6_300.mp4'
    },
    {
      series: 'Category 6 400',
      filename: '6_400.mp4'
    },
    {
      series: 'Category 6 500',
      filename: '6_500.mp4'
    }
  ]
};

const example: Answer = {
  series: 'Example Series',
  filename: 'example.mp4',
  index: -1,
  category: 'EXAMPLE',
  points: 100,
  example: true
};

// --------------------------------------------------------------------------------------------- //

let grid: Answer[] = Array(6 * 5);
Object.entries(answers).forEach(([_category, categoryAnswers], categoryIndex) => {
  categoryAnswers.forEach((answer, answerIndex) => {
    let index = answerIndex * 6 + categoryIndex;
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
