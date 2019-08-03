import { Example } from './example';
import { Subsense } from './subsense';
import { Note } from './note';

export class Sense {
    definitions: string[];
    examples: Example[];
    notes: Note[];
    subsenses: Subsense[];
}