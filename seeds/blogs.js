
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('blogs').del()
    .then(function () {
      // Inserts seed entries
      return knex('blogs').insert([
        { author: 'Bryan',
          title: 'How to make toast', 
          image: 'https://vegetarian-diaries.de/wp-content/uploads/2017/02/Warum-f%C3%A4llt-das-Toast-immer-auf-die-Marmeladenseite-The-Vegetarian-Diaries-Gewusst.jpg',
          text: 'Vestibulum lectus nisi, tempor vitae gravida id, auctor et ipsum. Fusce ut rutrum leo, vitae convallis dui. Donec sollicitudin laoreet convallis. Nullam semper auctor congue. Integer ex est, bibendum sed orci at, bibendum tincidunt sapien. Nulla egestas est nec magna malesuada, sit amet vulputate tellus venenatis. Suspendisse sed condimentum sem. Curabitur vitae fermentum ex, eget condimentum elit.'
        },
        { author: 'Luke',
          title: 'Lightsaber Maintenance',
          image: 'https://i.pinimg.com/originals/52/6e/92/526e920cb0594ffe2719c78f922923ee.jpg',
          text: 'Mauris erat ipsum, imperdiet nec dui non, eleifend lacinia augue. Vestibulum volutpat sollicitudin lorem. Morbi ultrices porttitor lacus. Maecenas sagittis, felis et condimentum ultrices, mi orci maximus sem, sed tempus mi ex sit amet magna. Proin a gravida neque. Sed blandit eget nisl id scelerisque. Aenean quis fermentum nibh, at fermentum est. Proin tellus leo, sodales quis eros in, convallis scelerisque arcu. Etiam maximus, nisl ac tempus hendrerit, dolor dui hendrerit mi, vitae pharetra quam nulla vel lacus. Nam faucibus dolor id tellus vulputate, ac scelerisque tellus finibus. Nulla quis condimentum ligula.'
        },
        { author: 'Harry',
          title: 'Acceptance into Hogwarts',
          image: 'https://i.pinimg.com/originals/fe/7e/b7/fe7eb76864ff1edb4e0ed6daa5b49a96.jpg',
          text: 'Maecenas non turpis volutpat sapien tincidunt venenatis at molestie libero. Maecenas vestibulum, arcu non lacinia laoreet, justo tellus consequat dolor, ut tempor est enim ultricies ligula. Vestibulum ante augue, commodo at eros eu, fermentum convallis mi. Quisque luctus arcu vel metus laoreet, sed volutpat risus aliquam. Curabitur aliquam elit in congue pulvinar. Integer dapibus ultricies nunc vitae tempus. Sed in arcu tellus. Fusce blandit elementum fermentum. Nunc eget pharetra mi, non efficitur dui. Suspendisse tempus eros vitae dolor semper porttitor.'
        },
        { author: 'Tom',
          title: 'Mouse Traps',
          image: 'https://www.teahub.io/photos/full/170-1701823_tom-and-jerry-ouch-wallpaper-trap-mouse-tom.jpg',
          text: 'Pellentesque id tristique magna. Praesent blandit arcu mattis nisl molestie, id facilisis lectus pharetra. Proin tristique nisl in ex pretium, et luctus tortor convallis. Maecenas eget efficitur ante. Suspendisse ut sem magna. Nulla cursus ac nisi ut rhoncus. Maecenas volutpat lectus risus, id scelerisque dolor varius quis. Mauris at metus sed neque mattis imperdiet. Aliquam commodo molestie molestie. Donec egestas elementum placerat. Maecenas fringilla molestie ante. Proin congue congue odio. Vestibulum suscipit fermentum orci, consectetur facilisis metus bibendum maximus. In efficitur mi ligula, et tempor nisl congue non.' 
        }
      ]);
    });
};
