import { Entry } from './entry';
import { Pronunciation } from './pronunciation';

export class LexicalEntry {
    entries: Entry[];
    lexicalCategory: string;
    pronunciations: Pronunciation[];
    text: string;
}