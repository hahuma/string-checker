import { describe, expect, it } from '@jest/globals'

import { chooseRegExpMethod } from '../../src/index'



describe('RegExp generation', () => {
    it('should return a array with one Regular Expressions to filter only letters', () => {
        expect(
            chooseRegExpMethod("ONLY_LETTERS"))
            .toStrictEqual(/^[a-zA-Záãâàäéêèëïìíîóòõôöùúûüçñ]+$/)
    })
    it('should return a array with one Regular Expressions to filter only numbers', () => {
        expect(
            chooseRegExpMethod("ONLY_NUMBERS"))
            .toStrictEqual(/^[0-9]+$/)
    })
    it('should return undefined with an invalid argument', () => {
        expect(
            chooseRegExpMethod("numbers"))
            .toBe(undefined)
    })
})