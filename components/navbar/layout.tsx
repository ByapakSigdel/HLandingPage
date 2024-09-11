import {Box} from '../styles/box';

interface LayoutProps {
   children: React.ReactNode;
}

export const Layout = ({children}: LayoutProps) => {
   return (
      <Box css={{
         maxW: "100%",
         minHeight: "100vh",
         position: 'relative',
         zIndex: 1,
         background: 'transparent'
      }}>
         {children}
      </Box>
   );
};