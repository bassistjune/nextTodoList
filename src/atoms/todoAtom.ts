import { atom } from 'recoil';
// Types
export interface ToDo {
    id: number;
    content: string;
    isDone: boolean;
}
export type filters = "ALL" | "TODO" | "DONE"

// States
export const todoState = atom<ToDo[]>({
    key: 'state',
    default: []
});
export const filterState = atom<filters>({
    key: 'filter',
    default: "ALL"
});