import { Example } from './example';
import { Subsense } from './subsense';

export class Sense {
    definitions: string[];
    examples: Example[];
    subsenses: Subsense;
}