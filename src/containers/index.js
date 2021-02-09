import {
    majorScale,
    Image,
    Pane,
    DashboardIcon,
    BoxIcon,
    MediaIcon,
    DocumentIcon,
    SettingsIcon,
    HelpIcon,
    useTheme,
    minorScale,
    Heading,
    EnvelopeIcon,
    LinkIcon,
    PrintIcon,
  } from "evergreen-ui";
  import React, { useState } from "react";
//   import { useCookies } from "react-cookie";
  import { Header } from "./header";
//   import { Login } from "./login";
//   import logo from "./logo.png";
  import { NavLink } from "./nav-link";

  export const PageLayout = ({
    breadcrumbs,
    children,
  }) => {
    // const [loggingOut, setLoggingOut] = useState(false);
    // const [cookies, , removeCookie] = useCookies();
    const { palette, scales } = useTheme();
    // const router = useRouter();
    // const { token } = cookies;

    // const handleLogout = () => {
    //   setLoggingOut(true);

    //   // Remove all cookies
    //   const names = Object.keys(cookies);
    //   for (const name of names) {
    //     removeCookie(name, { path: "/" });
    //   }

    //   router.push("/login/");
    // };

    return (
      <>
        <Pane display="flex" height="100vh">
          <Pane
            background={scales.blue.B2}
            borderRight
            display="flex"
            flexDirection="column"
            overflowY="auto"
            padding={majorScale(3)}
          >
            <Pane marginTop={majorScale(-2)} marginX={majorScale(-2)}>
              <Image alt="Pimberly" src={logo} width={majorScale(10)} />
            </Pane>
            <Pane
              alignItems="center"
              display="flex"
              flex={1}
              flexDirection="column"
              is="nav"
              marginTop={majorScale(1)}
            >
              <NavLink
                href="/"
                icon={DashboardIcon}
                marginTop={undefined}
                title="Dashboard"
              />
              <NavLink href="/products/" icon={BoxIcon} title="Products" />
              <NavLink href="/media/" icon={MediaIcon} title="Media" />
              <NavLink href="/print/" icon={PrintIcon} title="Print" />
              <NavLink href="/connections/" icon={LinkIcon} title="Connections" />
              <NavLink href="/media/" icon={DocumentIcon} title="Logs" />
              <NavLink href="/admin/" icon={SettingsIcon} title="Admin" />
              <NavLink href="/help/" icon={HelpIcon} title="Help" />
              <Pane display="flex" flexDirection="column" marginTop="auto">
                <NavLink
                  href="/messages/"
                  icon={EnvelopeIcon}
                  position="relative"
                  title="Messages"
                >
                  <Heading
                    background={palette.red.dark}
                    borderRadius="100%"
                    color="white"
                    fontWeight={600}
                    paddingX={minorScale(1)}
                    position="absolute"
                    right={majorScale(1)}
                    size={100}
                    top={majorScale(1)}
                  >
                    5
                  </Heading>
                </NavLink>
              </Pane>
            </Pane>
          </Pane>
          <Pane display="flex" flex={1} flexDirection="column" overflowY="auto">
            <Header breadcrumbs={breadcrumbs} />
            {children}
          </Pane>
        </Pane>
        {/* {loggingOut === false && token === undefined && <Login />} */}
      </>
    );
  };
