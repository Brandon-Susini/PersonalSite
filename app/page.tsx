"use client";
import {
  AppShell,
  Burger,
  Button,
  Group,
  Skeleton,
  Text,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { HeroText } from "./comps/HeroText/HeroText";

export default function HomePage() {
  return (
    <Stack>
      <HeroText></HeroText>
    </Stack>
  );
}
