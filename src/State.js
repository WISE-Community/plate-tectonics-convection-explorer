import CC from './components/backgrounds/continental-continental.svg';
import CCC1 from './components/backgrounds/continental-continental-convergent1.svg';
import CCC2 from './components/backgrounds/continental-continental-convergent2.svg';
import CCC3 from './components/backgrounds/continental-continental-convergent3.svg';
import CCC4 from './components/backgrounds/continental-continental-convergent4.svg';
import CCD1 from './components/backgrounds/continental-continental-divergent1.svg';
import CCD2 from './components/backgrounds/continental-continental-divergent2.svg';
import CCD3 from './components/backgrounds/continental-continental-divergent3.svg';
import CCD4 from './components/backgrounds/continental-continental-divergent4.svg';
import C from './components/backgrounds/convergent.svg';
import D from './components/backgrounds/divergent.svg';

export const MIN_INPUT_LENGTH = 3;
export const INIT_PLATE_STATES = ['cc'];
export const END_PLATE_STATES = ['ccd', 'ccc'];
export const BOUNDARY_STATES = ['c', 'd'];
export const STATE_TEXT = {
  cc: 'Continental-continental',
  c: 'Convergent boundary',
  d: 'Divergent boundary',
  ccd: 'A rift',
  ccc: 'Mountains',
};
export const SCREEN_STATES = {
  realExampleSelection: 1,
  plateSelection: 2,
  canStart: 3,
  canRetry: 4,
  canRestart: 5
};
export const LABELS = {
  crust: 'Crust',
  mantle: 'Mantle',
  core: `Earth's Core`,
  hot: 'Heat',
  cold: 'Cold'
};

export function backgroundForState(state, frame) {
  switch (state) {
    case 'cc':
      return CC;
    case 'ccc':
      switch (frame) {
        case 1:
          return CCC1;
        case 2:
          return CCC2;
        case 3:
          return CCC3;
        case 4:
          return CCC4;
        default:
          return null;
      }
    case 'ccd':
      switch (frame) {
        case 1:
          return CCD1;
        case 2:
          return CCD2;
        case 3:
          return CCD3;
        case 4:
          return CCD4;
        default:
          return null;
      }
    default:
      return null;
  }
}

export function boundaryForState(state) {
  switch (state) {
    case 'c':
      return C;
    case 'd':
      return D;
    default:
      return null;
  }
}
