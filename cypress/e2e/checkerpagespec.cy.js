/// <reference types="cypress" />

import {
    navigateToCheckers,
    playFiveCheckerMoves,
    checkersIsWorking,
    resetCheckersGame
} from "../page-objects/checkerpage"

describe('Checker Page Tests', () => {
    beforeEach(() => {
        navigateToCheckers();
    })

    it('should validate if checkers page is up', () => {
        checkersIsWorking();
    })

    it('should allow user to make five moves on the board w/taking blue piece', () => {
        playFiveCheckerMoves();
    })
    it('should allow user to reset checkerboard', () => {
        resetCheckersGame();
    })
})