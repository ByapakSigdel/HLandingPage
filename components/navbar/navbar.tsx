import React from 'react';
import Image from 'next/image';
import { Button, Dropdown, Link, Navbar, Switch, Text } from '@nextui-org/react';
import { ModalLogin, ModalContact } from '../modal';
import { icons } from './icons';
import { useTheme as useNextTheme } from 'next-themes';
import { useTheme } from '@nextui-org/react';
import { GithubIcon } from '../icons/GithubIcon';

interface AcmeLogoProps {
  isDark?: boolean;
}

const AcmeLogo: React.FC<AcmeLogoProps> = ({ isDark }) => (
  <Image
    src={isDark ? "/logo-light.png" : "/logo-dark.png"}
    alt="ACME Logo"
    width={100}
    height={100}
  />
);

export const Nav: React.FC = () => {
   const { setTheme } = useNextTheme();
   const { isDark, type } = useTheme();
   const collapseItems = [
      'Home',
      'Work',
      'Blog',
   ];

   return (
      <Navbar
         isBordered
         css={{
            'overflow': 'hidden',
            '& .nextui-navbar-container': {
               background: '$background',
               borderBottom: 'none',
            },
         }}
      >
         <Navbar.Brand>
            <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
            
            <AcmeLogo isDark={isDark} />
            
            <Navbar.Content
               hideIn="sm"
               css={{
                  pl: '6rem',
               }}
            >
               <Dropdown isBordered>
                  <Navbar.Item>
                     <Dropdown.Button
                        auto
                        light
                        css={{
                           px: 0,
                           dflex: 'center',
                           svg: {pe: 'none'},
                        }}
                        iconRight={icons.chevron}
                        ripple={false}
                     >
                        Our Services
                     </Dropdown.Button>
                  </Navbar.Item>
                  <Dropdown.Menu
                     aria-label="ACME features"
                     css={{
                        '$$dropdownMenuWidth': '340px',
                        '$$dropdownItemHeight': '70px',
                        '& .nextui-dropdown-item': {
                           'py': '$4',
                           'svg': {
                              color: '$secondary',
                              mr: '$4',
                           },
                           '& .nextui-dropdown-item-content': {
                              w: '100%',
                              fontWeight: '$semibold',
                           },
                        },
                     }}
                  >
                     <Dropdown.Item
                        key="autoscaling"
                        showFullDescription
                        description="Hundred Studios builds perfect, best looking websites for your business."
                        icon={icons.scale}
                     >
                        WebDevelopment
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="usage_metrics"
                        showFullDescription
                        description="We build games that are fun to play and easy to use."
                        icon={icons.activity}
                     >
                        Game Development
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="production_ready"
                        showFullDescription
                        description="We also handle your personal/commercial projects, from small to large."
                        icon={icons.flash}
                     >
                        Project Management
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="99_uptime"
                        showFullDescription
                        description="Reach the right audience with the right message with us."
                        icon={icons.server}
                     >
                        Digital Marketing
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="supreme_support"
                        showFullDescription
                        description="Overcome any challenge with a supporting team ready to respond."
                        icon={icons.user}
                     >
                        +Supreme Support
                     </Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown>
               <Navbar.Link isActive href="#">
                  Home
               </Navbar.Link>
               <Navbar.Link href="#works" onClick={(e) => {
      e.preventDefault(); // Prevent default anchor behavior
      document.querySelector('#works')?.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
    }}>Work</Navbar.Link>
               <Navbar.Link href="#">Blog</Navbar.Link>
            </Navbar.Content>
         </Navbar.Brand>

         <Navbar.Collapse>
            {collapseItems.map((item, index) => (
               <Navbar.CollapseItem key={item}>
                  <Link
                     color="inherit"
                     css={{
                        minWidth: '100%',
                     }}
                     href="#"
                  >
                     {item}
                  </Link>
               </Navbar.CollapseItem>
            ))}
            <Navbar.CollapseItem>
               
            </Navbar.CollapseItem>
            <Navbar.CollapseItem>
               <Switch
                  checked={isDark}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.CollapseItem>
         </Navbar.Collapse>
         <Navbar.Content>
            <ModalLogin />

            <Navbar.Item>
               <Button auto flat href="#">
                  <ModalContact />
               </Button>
            </Navbar.Item>
            <Navbar.Item hideIn={'xs'}>
               <Switch
                  checked={isDark}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.Item>
         </Navbar.Content>
      </Navbar>
   );
};