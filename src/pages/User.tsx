import * as React from 'react';
import { connect } from 'react-redux';

export interface IUserProps {
  user: any;
}
 
export interface IUserState {
  
}
 
class User extends React.Component<IUserProps, IUserState> {
  constructor(props: IUserProps) {
    super(props);
    this.state = { };
  }
  render() {

    const { user } = this.props;

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
      </>
    );
  }
}

const mapStateToProps = (store: any) => ({
  user: store.user.currentUser
});
 
export default connect(mapStateToProps)(User);