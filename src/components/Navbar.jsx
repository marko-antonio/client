import { AppBar, Box, Toolbar, Typography, styled, InputBase, Badge } from '@mui/material'
import React from 'react'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import EmailIcon from '@mui/icons-material/Email';

// Toolbar
const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
})

// Searchbar
const SearchBar = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

// Searchbar Icon
const SearchBarIcon = styled(Box)(({ theme }) => ({
    display: "flex",
}));


function Navbar() {
    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography variant='h5' sx={{ display: { xs: "none", sm: "block" } }}>
                    <AccountBalanceIcon /> CRDIS
                </Typography>
                <AccountBalanceIcon sx={{ display: { xs: "block", sm: "none" } }} />
                <SearchBar><InputBase placeholder='Search Here...' /></SearchBar>
                <SearchBarIcon>
                    <Badge badgeContent={4} color="error">
                        <EmailIcon/>
                    </Badge>                    
                </SearchBarIcon>
            
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar
