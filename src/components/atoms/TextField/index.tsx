import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

const TextInput: React.FC<TextFieldProps> = (props) => {
  return <TextField {...props} />;
};

export default TextInput;
