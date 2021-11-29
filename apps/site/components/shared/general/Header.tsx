import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import NavigationSearchContainer from '../navigation/NavigationSearchContainer';
import NavigationSearchIconWrapper from '../navigation/NavigationSearchIconWrapper';
import NavigationSearchInput from '../navigation/NavigationSearchInput';
import NavigationUserAccount from '../navigation/NavigationUserAccount';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar
          variant="dense"
          sx={{
            paddingX: '0 !important',
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          <Logo />
          <NavigationSearchContainer>
            <NavigationSearchIconWrapper>
              <SearchIcon />
            </NavigationSearchIconWrapper>
            <NavigationSearchInput
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </NavigationSearchContainer>
          <NavigationUserAccount />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
