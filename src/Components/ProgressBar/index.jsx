import { Container } from "./style";

export const ProgressBar = ({ ms }) => {
  return (
    <Container time={ms}>
      <div className="progress"></div>
    </Container>
  );
};
