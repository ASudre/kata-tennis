/** @flow */

export type Result = 'PLAYER_ONE' | 'PLAYER_TWO' | 'PENDING';
export type Winner = 'PLAYER_ONE' | 'PLAYER_TWO';
export type DEUCE = 'PLAYER_ONE' | 'PLAYER_TWO' | 'NOONE';
export type State = {
  player1: number,
  player2: number,
  deuce: DEUCE
};

export default function calculateScore(state: State, winner: Winner): Result {
  const { player1, player2, deuce } = state;

  if (player1 < 40 && player2 < 40) {
    return 'PENDING';
  }

  if (player1 === player2) {
    switch (deuce) {
      case 'NOONE':
        return 'PENDING';
      default:
        return winner === deuce ? winner : 'PENDING';
    }
  }

  return winner;
}
