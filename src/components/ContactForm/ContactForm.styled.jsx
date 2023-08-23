import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikErrorMessage } from 'formik';

export const Form = styled(FormikForm)`
  width: 400px;
  padding: 16px;
  border: 1px dashed black;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 20px 0;
`;
export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 14px;
  color: red;
`;