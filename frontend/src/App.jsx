import { Button } from "@chakra-ui/react";

function App() {
  
  return (
    <Box minH={"100vh"}>
      {/* <Navbar /> */}
      <Routes>
        <route path="/" element = {<HomePage />} />
        <route path="/create" element = {<CreatePage />} />
      </Routes>
      
    </Box>
  );
}

export default App
