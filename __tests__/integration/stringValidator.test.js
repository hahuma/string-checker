import { describe, it, expect } from '@jest/globals'
import stringValidator from '../../src/index'


describe('Validating if the choosen string respect all the regExp requirements', () => {
    it('should return true for the given string and choosen method', () => {
        expect(
            stringValidator('abcdABCDaBcD', 'ONLY_LETTERS'))
                .toBe(true)
    })
    it('should return true for the given string and choosen method', () => {
        expect(
            stringValidator('123456', 'ONLY_NUMBERS'))
                .toBe(true)
    })
    it('should return false for the given string and choosen method', () => {
        expect(
            stringValidator('ab323cdABCDaBcD', 'ONLY_LETTERS'))
                .toBe(false)
    })
    it('should return false for the given string and choosen method', () => {
        expect(
            stringValidator('___', 'ONLY_LETTERS'))
                .toBe(false)
    })
    it('should return false for the given string and choosen method', () => {
        expect(
            stringValidator('___', 'ONLY_NUMBERS'))
                .toBe(false)
    })
    it('should return false for the given string and choosen method', () => {
        expect(
            stringValidator('322324a', 'ONLY_NUMBERS'))
                .toBe(false)
    })
    it('should return false for the given string and choosen method', () => {
        expect(
            stringValidator('322324A', 'ONLY_NUMBERS'))
                .toBe(false)
    })
    it('should return false for an invalid method', () => {
        expect(
            () => { stringValidator('322324A', 'Numbers')})
                .toThrowError()
    })
    it('should return false for an invalid method', () => {
        expect(
            () => { stringValidator('322324', 'Numbers')})
                .toThrowError()
    })
})
