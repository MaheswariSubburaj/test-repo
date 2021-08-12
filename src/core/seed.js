import config from './config';
import { rndString } from '@laufire/utils/random';

const seed = {
	question: rndString(config.refreshIDLength),
	answer: '',
	score: 0,
};

export default seed;
