import { atom, selector } from 'recoil';

export const userAtom = atom({
    key: 'userAtom',
    default: {}
})

export const selectUserAtom = selector({
    key: 'getUserAtom',
    get: ({get}) => {
        const user = get(userAtom)
        return {
            user: user
        }
    }
})