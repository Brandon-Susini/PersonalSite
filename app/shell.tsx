"use client";
import { AppShell, Burger, Button, Group, Skeleton, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function Shell({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      footer={{ height: 60 }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <div>Brandon Susini's Portfolio</div>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar>
        {/* <Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <div>Navbar</div>
        </Group>
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={30} mt="sm" animate={false} />
          ))} */}
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>

      <AppShell.Footer>
        <Text p="md">Here is my contact info!</Text>
      </AppShell.Footer>
    </AppShell>
  );
}
