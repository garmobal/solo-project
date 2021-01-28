import React from 'react';

import { fireEvent, render, screen } from '../../../__tests__/test-utils';
import QuestionCreator from './QuestionCreator/QuestionCreator';
import TestCreator from './TestCreator.tsx';

const setup = () => {
  const utilsquestion = render(<TestCreator />);
  const question = utilsquestion.getByLabelText('question');
  const optiona = utilsquestion.getByLabelText('option-a');
  const optionb = utilsquestion.getByLabelText('option-b');
  const optionc = utilsquestion.getByLabelText('option-c');
  const optiond = utilsquestion.getByLabelText('option-d');
  const correctanswer = utilsquestion.getByLabelText('correctanswer');
  return {
    question,
    optiona,
    optionb,
    optionc,
    optiond,
    correctanswer,
    ...utilsquestion,
  };
};

describe('TestCreator', () => {
  it('should render the page', () => {
    render(<TestCreator />);
    expect(
      screen.getByText(/Start by adding some questions!/i)
    ).toBeInTheDocument();
  });
  it('should be able to create a question', () => {
    const onSubmit = jest.fn();
    const {
      question,
      optiona,
      optionb,
      optionc,
      optiond,
      correctanswer,
    } = setup();
    fireEvent.change(question, {
      target: { question: { value: 'RandomQuestion' } },
    });
    fireEvent.change(optiona, { target: { value: 'RandomAnswer' } });
    fireEvent.change(optionb, { target: { value: 'RandomAnswer' } });
    fireEvent.change(optionc, { target: { value: 'RandomAnswer' } });
    fireEvent.change(optiond, { target: { value: 'RandomAnswer' } });
    fireEvent.change(correctanswer, { target: { value: 'a' } });
    fireEvent.click(screen.getByText(/Add Question/i));
    expect(onSubmit).toBeCalled();
  });
});
