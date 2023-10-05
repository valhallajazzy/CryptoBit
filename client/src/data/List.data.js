

export const list = [
  {
    name: 'My Day',
    path: '/myday',
    reduxName: 'todos',
    filter: '.filter(todo => todo.isCompleted !== true)',
    icon: '<BsSun/>'
  },
  {
    name: 'Important',
    path: '/important',
    reduxName: 'todos',
    filter: '',
    icon: '<AiOutlineStar/>'
  },
  {
    name: 'Planned',
    path: '/planned',
    reduxName: 'todos',
    filter: '',
    icon: '<GrPlan/>'
  }

]