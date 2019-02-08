/* eslint-disable no-undef */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from '../routes';

test('valid path should display home', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/']}>
      <AppRoutes />
    </MemoryRouter>,
    { attachTo: document.getElementById('root') },
  );
  expect(wrapper.find('.home').length).toBe(1);
  expect(wrapper.find('.test').length).toBe(0);
});

test('valid path should display test', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/test']}>
      <AppRoutes />
    </MemoryRouter>,
    { attachTo: document.getElementById('root') },
  );
  expect(wrapper.find('.home').length).toBe(0);
  expect(wrapper.find('.test').length).toBe(1);
});
