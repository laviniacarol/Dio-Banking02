import * as React from 'react';

const VALID_HTML_ATTRS = new Set([
  'className', 'id', 'style', 'title', 'role', 'tabIndex',
  'href', 'src', 'alt', 'type', 'value', 'name', 'placeholder',
  'disabled', 'checked', 'readOnly', 'required', 'autoFocus',
  'autoComplete', 'multiple', 'min', 'max', 'step', 'pattern',
  'htmlFor', 'form', 'target', 'rel',
]);

function filterDOMProps(props: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {};
  for (const [key, value] of Object.entries(props)) {
    if (VALID_HTML_ATTRS.has(key) || key.startsWith('on') || key.startsWith('data-') || key.startsWith('aria-')) {
      result[key] = value;
    }
  }
  return result;
}

const ChakraProvider = ({ children }: { children: React.ReactNode }) =>
  React.createElement(React.Fragment, null, children);
const Box = ({ children, ...props }: any) =>
  React.createElement('div', filterDOMProps(props), children);
const Center = ({ children, ...props }: any) =>
  React.createElement('div', filterDOMProps(props), children);
const Flex = ({ children, ...props }: any) =>
  React.createElement('div', filterDOMProps(props), children);
const Heading = ({ children, ...props }: any) =>
  React.createElement('h1', filterDOMProps(props), children);
const Text = ({ children, ...props }: any) =>
  React.createElement('p', filterDOMProps(props), children);
const Input = ({ ...props }: any) =>
  React.createElement('input', filterDOMProps(props));
const Button = ({ children, ...props }: any) =>
  React.createElement('button', filterDOMProps(props), children);

export { ChakraProvider, Box, Center, Flex, Heading, Text, Input, Button };
export default { ChakraProvider, Box, Center, Flex, Heading, Text, Input, Button };
