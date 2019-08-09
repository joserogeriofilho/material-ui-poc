import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import CircularProgress from '@material-ui/core/CircularProgress';


const paginationStyles = makeStyles(theme => ({
  wrapper: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(2.5),
    width: '100%'
  }
}));


// Pagination actions
function TablePaginationActions(props) {
  const classes = paginationStyles();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  function handleFirstPageButtonClick(event) {
    onChangePage(event, 0);
  }

  function handleBackButtonClick(event) {
    onChangePage(event, page - 1);
  }

  function handleNextButtonClick(event) {
    onChangePage(event, page + 1);
  }

  function handleLastPageButtonClick(event) {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  }

  return (
    <div className={classes.wrapper}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}
  

const tableStyles = makeStyles(theme => ({
    wrapper: {
      overflowX: 'auto',
    },
    actionsWrapper: {
      display: 'flex',
      justifyContent: 'center'
    },
    paginationRoot: {
      borderBottom: '0'
    }
}));

// Actual table
export function UserTable(props) {
  const classes = tableStyles();

  // States
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  if ( props.isLoading ){
    return ( <div><CircularProgress color="secondary" /></div> );
  }
  
  if ( props.error ) {
    return (
      <div>
        <span>An error ocurred:</span>
        <p>{props.error.toString()}</p>
      </div>
    );
  }
  
  else {
    return (
      <div className={classes.wrapper}>
        <Table size="small">
          <TableHead>
            <TableRow>
            <TableCell>Last Name</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(user => (
            <TableRow key={user.id}>
              <TableCell component="th" scope="row">
              {user.lastName}
              </TableCell>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.userName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell align="center">
                <div className={ classes.actionsWrapper }>
                  <IconButton onClick={props.deleteUser.bind(this, user.id)} aria-label="Delete"><Icon>delete</Icon></IconButton>
                </div>
              </TableCell>
            </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow >
              <TablePagination
                classes={{root: classes.paginationRoot}}
                rowsPerPageOptions={[5, 10, 25]}
                colSpan={2}
                count={props.users.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                    inputProps: { 'aria-label': 'rows per page' },
                    native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions} />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    );        
  }
}