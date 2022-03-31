import { createContext } from 'react'

export const DataContext = createContext()

export const calendarData = {
  calendar: {
    '2022-03-27': [{
      id: '1',
      title: 'Item 1 - any js object',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isTodo: false,
      hasPeriod: false,
      period: {},
      date: '2022-03-27',
      time: null,
      tags: ['Home'],
      priority: 1000
    },
    {
      id: '2',
      title: 'Item 1 - any js object',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isTodo: false,
      hasPeriod: false,
      period: {},
      date: '2022-03-27',
      time: null,
      tags: ['Work'],
      priority: 600
    },
    {
      id: '3',
      title: 'Item 1 - any js object',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isTodo: false,
      hasPeriod: false,
      period: {},
      date: '2022-03-27',
      time: null,
      tags: ['Home', 'Idea'],
      priority: 1000
    },
    ],
    '2022-03-29': [{
      id: '4',
      title: 'Item 2 - any js object',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isTodo: false,
      hasPeriod: false,
      period: {},
      date: '2022-03-29',
      time: null,
      tags: ['Work', 'Idea'],
      priority: 800
    },
    {
      id: '5',
      title: 'Item 1 - any js object',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isTodo: false,
      hasPeriod: false,
      period: {},
      date: '2022-03-29',
      time: null,
      tags: ['Home'],
      priority: 500
    }],
    '2022-03-30': [{
      id: '6',
      title: 'Item 3 - any js object',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isTodo: false,
      hasPeriod: false,
      period: {},
      date: '2022-03-30',
      time: null,
      tags: ['Home'],
      priority: 800
    },
    {
      id: '7',
      title: 'Item 2 - any js object',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isTodo: false,
      hasPeriod: false,
      period: {},
      date: '2022-03-29',
      time: null,
      tags: ['Work', 'Idea'],
      priority: 800
    },
    {
      id: '8',
      title: 'Item 2 - any js object',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isTodo: false,
      hasPeriod: false,
      period: {},
      date: '2022-03-29',
      time: null,
      tags: ['Work', 'Idea'],
      priority: 800
    }],
    '2022-03-31': [{
      id: '9',
      title: 'Item 4 - any js object',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isTodo: false,
      hasPeriod: false,
      period: {},
      date: '2022-03-31',
      time: null,
      tags: ['Work'],
      priority: 600
    },
    {
      id: '10',
      title: 'any js object',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isTodo: false,
      hasPeriod: false,
      period: {},
      date: '2022-03-31',
      time: null,
      tags: ['Home', 'Idea'],
      priority: 800
    }]
  },
  todo: [
    {
      id: '11',
      title: 'any js object',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isTodo: true,
      hasPeriod: false,
      period: {},
      date: null,
      time: null,
      tags: ['Home', 'Idea'],
      priority: 800
    },
    {
      id: '12',
      title: 'any js object',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isTodo: true,
      hasPeriod: false,
      period: {},
      date: null,
      time: null,
      tags: ['Home', 'Idea'],
      priority: 800
    },
    {
      id: '13',
      title: 'any js object',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isTodo: true,
      hasPeriod: false,
      period: {},
      date: null,
      time: null,
      tags: ['Home', 'Idea'],
      priority: 800
    }
  ],
  notes: [
    {
      id: '14',
      title: 'any js object',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isTodo: false,
      hasPeriod: false,
      period: {},
      date: '2022-03-31',
      time: null,
      tags: ['Home', 'Idea'],
      priority: 800
    },
    {
      id: '15',
      title: 'any js object',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isTodo: false,
      hasPeriod: false,
      period: {},
      date: '2022-03-31',
      time: null,
      tags: ['Home', 'Idea'],
      priority: 800
    },
    {
      id: '16',
      title: 'any js object',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isTodo: false,
      hasPeriod: false,
      period: {},
      date: '2022-03-31',
      time: null,
      tags: ['Home', 'Idea'],
      priority: 800
    }
  ]
}

