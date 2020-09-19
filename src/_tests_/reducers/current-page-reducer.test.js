import currentPageReducer from '../../reducers/current-page-reducer';

describe("currentPageReducer", () => {

  test('Shoud return default state if not action type is recognized', () => {
    expect(currentPageReducer(false, { type: null })).toEqual(false);
  });
});