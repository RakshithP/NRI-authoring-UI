'use strict';
var position = {
  name: 'Position (x, y, z)',
  val: '',
};

var tasks = [
    {
      name: 'IKEA Kit',
      therbligList: [
        {
          name: 'Transport Empty',
          type: 'physical',
          parameters: [
            position,
            { name: 'Orientation',
              val: ''
            } ,
            {
              name: 'Angle',
              val: '',
            },
            {
              name: 'Arm',
              val: '',
            },
          ],
          things: [
            {
              name: 'A',
              parameters: [
                position,
              ],
            },
          ]
        }
      ],
    },
    {
      name: 'Rothschild Kit',
      therbligList: [
      ],
    },
    {
      name: 'Roaster Kit',
      therbligList: [
      ],
    },
    {
      name: 'Furniture Kit',
      therbligList: [
      ],
    }
];

export default { tasks };