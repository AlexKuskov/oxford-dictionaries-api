import { Entry } from './entry';
import { Pronunciation } from './pronunciation';
import { LexicalCategory } from './lexical-category';

export interface LexicalEntry {
    entries: Entry[];
    lexicalCategory: LexicalCategory;
    pronunciations: Pronunciation[];
    text: string;
}