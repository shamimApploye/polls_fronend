import styled from "styled-components";


export const Container = styled.div`
  margin: 20px auto; /* Center horizontally with auto margin */
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 1200px; /* Restrict maximum width */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  min-width: 300px;
`;