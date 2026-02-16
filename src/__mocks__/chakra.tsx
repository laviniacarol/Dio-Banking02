import * as React from 'react';

const ChakraProvider = ({ children }: { children: React.ReactNode }) =>
  React.createElement(React.Fragment, null, children);
const Box = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) =>
  React.createElement('div', props, children);
const Center = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) =>
  React.createElement('div', props, children);
const Flex = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) =>
  React.createElement('div', props, children);
const Heading = ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
  React.createElement('h1', props, children);
const Text = ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) =>
  React.createElement('p', props, children);
const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) =>
  React.createElement('input', props);
const Button = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) =>
  React.createElement('button', props, children);

export { ChakraProvider, Box, Center, Flex, Heading, Text, Input, Button };
export default { ChakraProvider, Box, Center, Flex, Heading, Text, Input, Button };
