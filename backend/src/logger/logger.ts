import logger from 'pino';
import moment from 'moment';

const log = logger({
  prettifier: true,
  base: {
    pid: false,
  },
  timestamp: () => `,"time:"${moment().format('MMM YY dddd')}`,
});

export default log;
