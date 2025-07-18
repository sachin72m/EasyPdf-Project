import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function ForgotPassword() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here (e.g., send email)
    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Forgot Password
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Reset password</DialogTitle>
          <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
            <DialogContentText>
              Enter your account&apos;s email address, and we&apos;ll send you a link to reset your password.
            </DialogContentText>
            <OutlinedInput
              autoFocus
              required
              margin="dense"
              id="email"
              name="email"
              label="Email address"
              placeholder="Email address"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions sx={{ pb: 3, px: 3 }}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" type="submit">
              Continue
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
