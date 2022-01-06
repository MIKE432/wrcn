import { container } from './inversify.config';
import { Application } from './Application';

Application.startup(container).then(
  () => {
    console.log('Application started');
  },
  () => {
    console.log('Application terminated');
  }
);
