/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Box, Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";
import MobileNav from "./mobileNav";
import SidebarContent from "./sidebarContent";

const SimpleSidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box height="100vh" display="inline">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
    </Box>
  );
};

export default SimpleSidebar;
