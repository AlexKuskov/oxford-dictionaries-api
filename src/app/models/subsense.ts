import { Example } from './example';
import { Note } from './note';

export interface Subsense {
    definitions: string[];
    examples: Example[];
    notes: Note[];
}