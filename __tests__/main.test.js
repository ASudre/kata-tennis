/** @flow */

import calculateScore from '../src/main';

describe('greeter function', () => {
  it('should continue when no one wins yet', () => {
    // given
    const state = {
      player1: 0,
      player2: 0,
      deuce: 'NOONE',
    };
    const winner = 'PLAYER_ONE';

    // when
    const result = calculateScore(state, winner);

    // then
    expect(result).toEqual('PENDING');
  });

  it('should return the first player when he wins', () => {
    // given
    const state = {
      player1: 40,
      player2: 30,
      deuce: 'NOONE',
    };
    const winner = 'PLAYER_ONE';

    // when
    const result = calculateScore(state, winner);

    // then
    expect(result).toEqual('PLAYER_ONE');
  });

  it('should continue when two players are at 40', () => {
    // given
    const state = {
      player1: 40,
      player2: 40,
      deuce: 'NOONE',
    };
    const winner = 'PLAYER_ONE';

    // when
    const result = calculateScore(state, winner);

    // then
    expect(result).toEqual('PENDING');
  });

  it('should return the first player when he wins the deuce', () => {
    // given
    const state = {
      player1: 40,
      player2: 40,
      deuce: 'PLAYER_ONE',
    };
    const winner = 'PLAYER_ONE';

    // when
    const result = calculateScore(state, winner);

    // then
    expect(result).toEqual('PLAYER_ONE');
  });

  it('should return PENDING when the player without advantage wins', () => {
    // given
    const state = {
      player1: 40,
      player2: 40,
      deuce: 'PLAYER_ONE',
    };
    const winner = 'PLAYER_TWO';

    // when
    const result = calculateScore(state, winner);

    // then
    expect(result).toEqual('PENDING');
  });
});
