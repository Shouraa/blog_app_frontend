import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Blog from './Blog';

const mockBlog = {
  title: 'Mock Title',
  author: 'Mock Author',
  url: 'www.mockurl.com',
  likes: 1,
  user: {
    username: 'mockUser',
    name: 'Mock Name',
  },
};

describe('<Blog />', () => {
  let component;

  beforeEach(() => {
    component = render(
      <Blog
        blog={mockBlog}
        user={{ name: 'Mock Author' }}
        handleChange={jest.fn()}
        removeBlog={jest.fn()}
      />
    );
  });

  test('displays just title and author by default', () => {
    expect(component.container).toHaveTextContent('Mock Title Mock Author');

    const togglableContent = component.container.querySelector(
      '.togglableContent'
    );

    expect(togglableContent).toHaveStyle('display: none');
  });

  test('displays togglableContent when view is clicked', () => {
    expect(component.container).toHaveTextContent('Mock Title Mock Author');

    const button = component.getByText('view');
    fireEvent.click(button);

    const details = component.container.querySelector('.togglableContent');
    expect(details).not.toHaveStyle('display: none');
  });
});
