import React, { useState } from "react";
import { Container, Text, VStack, Box, Input, Button, HStack, Avatar, Badge, IconButton, useToast, FormControl, FormLabel, Textarea, Select } from "@chakra-ui/react";
import { FaSearch, FaStar, FaCalendarAlt, FaCreditCard, FaComments, FaUserShield, FaUser, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const toast = useToast();

  const handleLogin = () => {
    setIsAuthenticated(true);
    setUserRole("user"); // or 'instructor' or 'admin'
    toast({
      title: "Logged in successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    toast({
      title: "Logged out successfully.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleSearch = () => {
    // Implement search functionality
    toast({
      title: `Searching for "${searchQuery}"...`,
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <HStack width="100%" justifyContent="space-between">
          <Text fontSize="2xl">Instructor Booking App</Text>
          {isAuthenticated ? (
            <Button leftIcon={<FaSignOutAlt />} colorScheme="red" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button leftIcon={<FaSignInAlt />} colorScheme="teal" onClick={handleLogin}>
              Login
            </Button>
          )}
        </HStack>
        <HStack width="100%">
          <Input placeholder="Search by city or location" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <IconButton aria-label="Search" icon={<FaSearch />} onClick={handleSearch} />
        </HStack>
        {isAuthenticated && userRole === "user" && (
          <Box width="100%">
            <Text fontSize="xl">User Dashboard</Text>
            {/* User Dashboard Content */}
          </Box>
        )}
        {isAuthenticated && userRole === "instructor" && (
          <Box width="100%">
            <Text fontSize="xl">Instructor Dashboard</Text>
            {/* Instructor Dashboard Content */}
          </Box>
        )}
        {isAuthenticated && userRole === "admin" && (
          <Box width="100%">
            <Text fontSize="xl">Admin Panel</Text>
            {/* Admin Panel Content */}
          </Box>
        )}
        {!isAuthenticated && (
          <Box width="100%">
            <Text fontSize="xl">Welcome to the Instructor Booking App</Text>
            <Text>Login to access your dashboard.</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
