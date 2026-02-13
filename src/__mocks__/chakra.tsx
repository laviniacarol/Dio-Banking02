import * as React from 'react';

const ChakraProvider = ({ children }: { children: React.ReactNode }) =>
  React.createElement(React.Fragment, null, children);
const Box = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) =>
  React.createElement('div', props, children);
const Center = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) =>
  React.createElement('div', props, children);
const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) =>
  React.createElement('input', props);
const Button = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) =>
  React.createElement('button', props, children);

export { ChakraProvider, Box, Center, Input, Button };
export default { ChakraProvider, Box, Center, Input, Button };
