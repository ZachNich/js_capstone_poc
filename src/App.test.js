import React from 'react';
import { render } from '@testing-library/react';

let test = (testFunction) => it('sum all multiples of 3 and 5, between 0 and given num', () => {
  expect(testFunction(10).toEqual(8));
})

export default test