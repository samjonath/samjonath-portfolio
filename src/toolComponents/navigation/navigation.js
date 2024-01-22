import { useState } from "react";
import {
  createStyles,
  AppShell,
  Header,
  Navbar,
  Burger,
  MediaQuery,
  Anchor,
  Button,
  Image,
  Group,
  Avatar,
  Menu,
  Text,
  Select,
  SegmentedControl,
  useMantineTheme,
} from "@mantine/core";
import { useNavigate, useLocation } from "react-router-dom";
import {
  IconHome,
  IconAdjustments,
  IconChevronDown,
  IconEye,
  IconChecklist,
  IconChartBar,
  IconSearch,
} from "@tabler/icons-react";

import "../../assets/styles/navigation.css";

function Navigation() {
  const [opened, setOpened] = useState(false);

  const loc = useLocation();
  const isActive = (path) => {
    console.log(loc, path);
    if (loc.pathname === path) {
      return "active-link";
    }
    if (path === "/recon-config/" && loc.pathname.startsWith(path)) {
      return "active-link";
    }
    return "not-active";
  };
  return (
    <AppShell
      sx={{
        maxHeight: "80px",
        marginBottom: "20px",
      }}
      header={
        <Header
          height={76}
          sx={{
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50px",
            backgroundColor: "rgba(114,114,114,.2)",
          }}
        >
          <Group position="center">
            {/* <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                    <Group>
                        <Burger
                        opened={opened}
                        onClick={() => setOpened((o) => !o)}
                        size="md"
                        mr="xl"
                        color="#FCEE21"
                        />
                        <Image maw={35} src={Logo} />
                    </Group>
                </MediaQuery> */}
            <div>
              <Group>
                <Anchor>
                  <Button
                    style={{ backgroundColor: "transparent", color: "black" }}
                    className={isActive("/")}
                  >
                    {`Home`}
                  </Button>
                </Anchor>
                <Anchor>
                  <Menu position="bottom-start" trigger="hover">
                    <Menu.Target>
                      <Button
                        style={{
                          backgroundColor: "transparent",
                          color: "black",
                        }}
                        className={isActive(`/recon-config/`)}
                      >
                        {`Tech Expertiese`}
                      </Button>
                    </Menu.Target>
                    <Menu.Dropdown className="menu-dropdown">
                      <Menu.Item className="menu-item">{`Account Settings`}</Menu.Item>
                      <Menu.Item className="menu-item">{`Create New Recon Config`}</Menu.Item>
                      <Menu.Item className="menu-item">{`Previous Recon Config`}</Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </Anchor>
                <Anchor>
                  <Button
                    style={{ backgroundColor: "transparent", color: "black" }}
                    className={isActive("/view-recons/")}
                  >
                    Resume
                  </Button>
                </Anchor>
                <Anchor>
                  <Menu position="bottom-start" trigger="hover">
                    <Menu.Target>
                      <Button
                        style={{
                          backgroundColor: "transparent",
                          color: "black",
                        }}
                        color="white"
                      >
                        {`About`}
                      </Button>
                    </Menu.Target>

                    <Menu.Dropdown className="menu-dropdown">
                      <Menu.Item className="menu-item">{`Manage Access`}</Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </Anchor>
                {/* <Anchor style={{ right: "0", position: "absolute" }}>
                  <Button
                    variant="transparent"
                    className={isActive("/insights/")}
                  >
                    <span style={{ color: "black" }}>
                      <IconSearch size="1rem" />
                    </span>
                  </Button>
                </Anchor> */}
              </Group>
            </div>
          </Group>
        </Header>
      }
    ></AppShell>
  );
}

export default Navigation;
