import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/p-Jimenez/YACTG', // Update to point to your repository
  user: {
   name: 'p-Jimenez', // update to use your name
   email: 'pablo.jimg@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);