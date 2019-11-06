import * as React from 'react';
import { connect } from 'react-redux';
import { CustomButton } from '../components/custom-button/';
import { auth } from '../firebase/firebase.utils';
import { setCurrentUser } from '../redux/user/user.action';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/user/user.selector';

export interface IUserProps {
  user?: any;
  history?: any;
  setCurrentUser?: any;
}
 
const User: React.FC<IUserProps> = ({
  user, 
  history,
  setCurrentUser,
}) => {
  return (
    <>
      <h1>{user.displayName}'s Settings </h1>
      <img 
        width={25} 
        height={25} 
        src={user.photoURL}
        style={{borderRadius: 50}} 
        alt="profile"
      />
      <br />
      <CustomButton onClick={async () => {
        await auth.signOut();
        setCurrentUser(null);
        history.push('/');
      }
      }>
        Log Out 
      </CustomButton>
    </>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});
 
export default connect(mapStateToProps, mapDispatchToProps)(User);