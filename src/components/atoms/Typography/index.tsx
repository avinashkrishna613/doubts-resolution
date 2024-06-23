import React from 'react';
import { Typography as MuiTypography, TypographyProps } from '@mui/material';

const Typography: React.FC<TypographyProps> = (props) => {
  return <MuiTypography {...props}>{props.children}</MuiTypography>;
};

export default Typography;
