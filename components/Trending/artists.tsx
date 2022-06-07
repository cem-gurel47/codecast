import React from "react";
import { Box, Text, Grid } from "@chakra-ui/react";
import { Artist } from "../../types/spotify";
import ArtistCard from "./artistCard";

const Artists = ({ artists }: { artists: Artist[] }) => {
  return (
    <Box px={10} mx={-10}>
      <Text fontWeight="medium" fontSize="xl" color="white">
        Artists
      </Text>
      <Grid
        templateColumns="repeat(10,1fr)"
        templateRows="repeat(1,1fr)"
        overflowX="scroll"
        gap={6}
        mx={-10}
        p={10}
        pt={4}
      >
        {artists.map((artist) => (
          <ArtistCard key={artist.data.uri} artist={artist} />
        ))}
      </Grid>
    </Box>
  );
};

export default Artists;
